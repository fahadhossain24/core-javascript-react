
const MyFormData = () => {
    const onSubmit = e => {
        e.preventDefault();

        const formData = new FormData()
        // console.log(formData)
        const userData = {
            name: e.target.name.value,
            email: e.target.email.value
        }
        // console.log(userData)

        for (let key in userData) {
            formData.append(key, userData[key])
        }

        // const data = Object.fromEntries(formData)
        // console.log(data)

        // formData.append('name', 'roman')
        // console.log(formData.get('name'))

        // const values = [...formData.values()]
        // console.log(values)

        // const iterableArr = [2, 10, 8, 9]

        // const iterator = iterableArr[Symbol.iterator]()
        // console.log(iterator.next())
        // console.log(iterator.next())
        // console.log(iterator.next())
        // console.log(iterator.next())
        // console.log(iterator.next())


        //     const myLoop = (iterator) =>{
        //       const {value, done} = iterator.next();
        //       if(!done){
        //         console.log(value)
        //         myLoop(iterator)
        //       }
        //     }

        // myLoop(iterator)


        // const empty = values.includes('')
        // if(empty){
        //   console.log('empty')
        // }
        // const hasEmail = formData.has('email');
        // console.log(hasEmail)


        // for(let [key, value] of formData){
        //   console.log(key, value)
        // }
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name='name' /><br /> <br />
                <label htmlFor="email">email</label>
                <input type="email" name='email' /><br /><br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default MyFormData;