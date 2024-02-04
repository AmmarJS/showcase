import { error } from '@sveltejs/kit';

export const actions = {
    resetPassword: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('users').requestPasswordReset(body.email);
            return {
                success: true
            }
        } catch(err) {
            console.error("Error: ", err);
            throw error(500, "Something went wrong");
        }
    }
}