import React, { useState } from 'react'

export default function SingUp() {
    const [firstName, setfirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()



    return (
        <div>
            <form>
                <div>
                    <input
                        value={firstName}
                        type="text"
                        placeholder="please enter your first name"
                        required
                    />
                    <input
                        value={lastName}
                        type="text"
                        placeholder="please enter your last name"
                        required
                    />
                    <input
                        value={email}
                        type="email"
                        placeholder="please enter your email"
                        required
                    />
                    <input
                        value={password}
                        type="password"
                        placeholder
                        required
                    />
                </div>
            </form>
        </div>
    )
}
