cronAdd("expireOutdatedEvents", "*/1 * * * *", () => {
    const expiredEvents = $app.dao().findRecordsByFilter(
        "liveEvents", // collection
        "date < @now && isExpired = false", // filter
    )

    expiredEvents.forEach((expiredEvent) => {
        expiredEvent.set("isExpired", true)
        $app.dao().saveRecord(expiredEvent)
    })
})