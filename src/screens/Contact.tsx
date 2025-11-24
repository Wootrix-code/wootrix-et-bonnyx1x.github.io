import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from "@emailjs/browser"

type FormInputs = {
    subject: string,
    email: string,
    message: string,

}

const onSubmit: SubmitHandler<FormInputs> = data => {
    emailjs.send(
        `service_50t7pp9`,
        'template_1t39l6l',
        {
            subject: data.subject,
            email: data.email,
            message: data.message,
        },
        'vEhCVCWYPLtggCdiP'
    )
}

export const Contact = () => {

    const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();

    return (
        <div>
            <h1 className='font-extrabold text-3xl mb-4'>Contact</h1>

            <h3>EMAIL : wootrix.ytb@gmail.com</h3>

            <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className='mr-3 block' id="subject">Sujet du mail</label>
                    <input {...register("subject")} type="text" name="subject" id="subject" placeholder='Quel est votre sujet' className='border rounded-lg'/>
                </div>
                <div>
                    <label className='mr-3 block' id='email'>EMAIL</label>
                    <input {...register("email", {required: true})} type="email" name='email' id='email' placeholder='Votre Email' className='border rounded-lg'/>
                    {errors.email && <p className="text-[red]">*Email Requis</p>}
                </div>
                <div>
                    <label className='mr-3 block' id='message'>Message</label>
                    <textarea {...register("message")} rows={5} id='message' name='message' placeholder='Votre Message' className='border resized-none'/>
                </div>

                <input type="submit" className="block bg-[#F54927] rounded-lg py-2 px-2 text-[white] hover:bg-[#D13A1D]"/>
            </form>
        </div>
    )
}