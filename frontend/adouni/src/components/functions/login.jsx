
const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true
    },
    signout(cb) {
        this.isAuthenticated = false
    }
}

function a(){
    return false
}

export {fakeAuth, a}
