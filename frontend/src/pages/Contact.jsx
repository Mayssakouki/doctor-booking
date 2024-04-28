

const Contact = () => {
  return (
   <section>
    <div className='max-w-screen-md px-4 mx-auto'>
    <h2 className='text-center heading'>Contact Us</h2>
   <p className='mb-8 font-light text-center lg:mb-16 text__para'>Got a suggestion, a technical problem, a comment ? Let us know.</p>
   <form action='#' className='space-y-8'>
    <div>
      <label htmlFor='email'className='form__label'>Your Email</label>
      <input type='email' id="email" placeholder='example@gmail.com' className='mt-1 form__input'/>
    
    </div>
    <div>
      <label htmlFor='subject'className='form__label'>Subject</label>
      <input type='text' id="subject" placeholder='Let us know how we can help you ' className='mt-1 form__input'/>
    </div>

    <div className="sm:col-span-2">
      <label htmlFor='message'className='form__label'>Your message</label>
      <textarea 
      rows={6}
      type='text' id="message" placeholder='Leave a comment ...' className='mt-1 form__input'/>
    </div>
    <button type="submit" className="rounded btn sm:w-fit">Submit</button>
  </form>
    </div>
   </section>
  )
}

export default Contact
