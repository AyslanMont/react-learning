export default function CartaoUsuario(props){    
    return(
        <>
        <ul>
            <li>Nome: {props.nome}</li>
            <li>Email: {props.email}</li>
            <li>Idade: {props.idade}</li>
            {props.children}
        </ul>
        </>
    );
}