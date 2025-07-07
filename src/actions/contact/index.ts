'use server';
import { readOnlyBackend } from "@/utils/backend"; // authorized axios instance to contact with strapi

type ContactFormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
};

export async function submitContactMessage(formData: ContactFormData) {
    try {
        const response = await readOnlyBackend.post('/contact-messages', {
            data: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
            },
        });

        return {
            success: true,
            data: response.data,
        };
    } catch (error: any) {
        console.error("Error submitting contact message:", error.response?.data || error.message);

        return {
            success: false,
            error: error.response?.data?.error?.message || 'حدث خطأ أثناء إرسال الرسالة',
        };
    }
}
