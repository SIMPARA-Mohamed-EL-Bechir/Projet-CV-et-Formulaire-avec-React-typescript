export const Form_titre_du_cv = () =>{
    return(
        <div>
            <h4 className="rounded-lg font-extrabold bg-indigo-600">TITRE DU CV</h4><hr />
            <label htmlFor="titre">Titre:</label><br />
            <input type="text" placeholder="Entrer un Titre"/>
        </div> 
    );
}