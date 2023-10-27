
export const Form_information_perso = () =>{
    return(
        <div>
            <h4 className="rounded-lg bg-indigo-600 font-extrabold">INFORMATIONS PERSONNELLES</h4><hr />
            <label className="block" htmlFor="name">Nom:</label>
            <input className="border-black" type="text" placeholder="Entrez un nom en majuscules"/><br />
            <label className="block" htmlFor="prenom">Prénom:</label>
            <input className="border" type="text" placeholder="Entrez un Prénom"/><br />
            <label className="block" htmlFor="adresse">Adresse:</label>
            <input className="border" type="text" placeholder="Entrez une adresse"/><br />
            <label className="block" htmlFor="annee">Année de naissance:</label>
            <input className="border" type="text" placeholder="Entrez une année de naissance"/><br />
            <label className="block" htmlFor="age">Age:</label>
            <input className="border" type="text" placeholder="Entrez un âge"/><br />
            <label className="block" htmlFor="email">Email:</label>
            <input className="border" type="text" placeholder="Entrez un email"/><br />
            <label htmlFor="situation">Marié ou Célibataire?</label><br />
            <input className="border-black" type="radio" /> Marié <input type="radio" /> Célibataire
        </div> 
    );
}