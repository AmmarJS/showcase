import { error } from '@sveltejs/kit';

export const actions = {
    updateProfile: async ({ locals, request }) => {
        let data = await request.formData();
        const userAvatar = data.get('avatar');

        if(userAvatar.size === 0) {
            data.delete('avatar')
        }

        try {
            const { name, avatar } = await locals.pb.collection('users').update(locals?.user?.id, data)

            locals.user.name = name
            locals.user.avatar = avatar
        } catch(err) {
            console.log("Error: ", err)

            throw error(400, 'Something went wrong with updating your profile')
        }

        return {
            success: true
        }
    }
}