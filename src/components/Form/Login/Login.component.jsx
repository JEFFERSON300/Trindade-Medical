export const FormLoginComponent = () => {
    return (
    <form>
        <div className="input-group"> 
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" placeholder="Digite seu email"/>
        </div>

        <div className="input-group"> 
        <label htmlFor="senha">Senha</label>
        <input type="password" id="password" placeholder="Digite sua senha"/>
        
        </div>
        <button type="submit">Logar</button>
        
    </form>)
}