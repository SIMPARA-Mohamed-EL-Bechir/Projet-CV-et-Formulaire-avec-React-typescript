export const Form_competences_ling = () =>{
    return(
        <div>
            <h4 className="bg-indigo-600 font-extrabold rounded-lg">COMPETENCES TECHNIQUES <hr /></h4> <br />
            <label htmlFor="competences_ling">Quelles sont les langues que vous parlez?</label><br />
            <input type="checkbox" /> Français <br />
            <input type="checkbox" /> Anglais<br />
            <input type="checkbox" /> Autre <br />
            <input type="text" placeholder="Entrer une langue" /><br />
        </div> 
    );
}