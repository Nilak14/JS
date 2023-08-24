const User = {
    _email: 'n@lak.com',
    _password: "abc",

    get email(){
    return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email)

// Old method use new method preset in getter_setter.js