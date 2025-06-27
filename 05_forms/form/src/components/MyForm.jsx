import "./MyForm.css    "

export default function MyForm(){
    return (
        <div>
            {/* Criação de form */}
            <form>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite seu nome..."/>
                </div>
                {/* Label envolvendo input */}
                <label>
                    <span>E-mail:</span>
                    <input type="email" name="email" placeholder="Digite seu email..."/>
                </label>

                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}