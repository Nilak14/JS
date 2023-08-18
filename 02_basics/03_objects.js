let mysm = Symbol("mykey1")
const user = {
    name: "Nilak",
    age: 22,
    [mysm]: 'mykey1',
    location: "Pokhara",
    email: "nilakpathak14@gmaol.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}
console.log(user)