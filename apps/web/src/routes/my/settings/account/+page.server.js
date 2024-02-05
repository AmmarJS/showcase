import { error } from '@sveltejs/kit'

export const actions = {
    updateEmail: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('users').requestEmailChange(data.email)
        } catch(err) {
            console.error("Error: ", err)

            throw error(err.status, err.message)
        }

        return {
            success: true
        }
    },
    updateUsername: async ({ locals, request }) => {
        const data = Object.fromEntries(await request.formData())

        try {
            await locals.pb.collection('users').getFirstListItem(`username = "${data.username}"`)
        } catch(err) {
            if(err.status === 404) {
                try {
                    const { username } = await locals.pb.collection('users').update(locals.user.id, { username: data.username })
                    locals.user.username = username
                    return {
                        success: true
                    }
                } catch(err) {
                    console.error("Error: ", err)
                    throw error(err.status, err.message)
                }
            }

            console.error("Error: ", err)
            throw error(err.status, err.message)
        }
    }
}