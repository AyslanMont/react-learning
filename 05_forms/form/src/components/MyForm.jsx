import "./MyForm.css"
import {useState} from 'react'

export default function MyForm(){
    // 3 - Gerenciamento de dados
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    
    const handlename = (e) => {
        setName(e.target.value)
    }

    return (
        <div>
            {/* 1 - Criação de form */}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome..." onChange={handlename}/>
                </div>
                {/* 2 - Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite seu email..."/>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}