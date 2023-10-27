export const Form_loisirs = () =>{
    return(
        <div>
            <br />
            <h4 className="rounded-lg bg-indigo-600 font-extrabold">LOISIRS</h4><hr /> <br />
            <label htmlFor="loisirs">Quelles sont vos loisirs?</label><br />
            <input type="checkbox" /> Sport <br />
            <input type="checkbox" /> Lecture<br />
            <input type="checkbox" /> Bénévolat<br />
            <input type="checkbox" /> Autre <br />
            <input type="text" placeholder="Entrer un loisir" /><br />
        </div> 
    );
}