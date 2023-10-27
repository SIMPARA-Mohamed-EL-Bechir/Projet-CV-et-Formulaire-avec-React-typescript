export const Form_formation_diplome = () =>{
    return(
        <div>
            <h4 className="rounded-lg bg-indigo-600 font-extrabold">FORMATIONS ET DIPLÔMES</h4><hr />
            <i>Quel est votre Diplôme?</i><br />
            <select name="diplome" id="diplome">
                <option value="DUT">DUT</option>
                <option value="Ingenieur">Ingenieur</option>
                <option value="Master">Master</option>
                <option value="Doctorat">Doctorat</option>
            </select>
            <br />
            <label htmlFor="description">Description de la Formation</label><br />
            <textarea name="description" id="description" placeholder="Entrer la description de votre Formation"></textarea>
            
        </div> 
    );
}