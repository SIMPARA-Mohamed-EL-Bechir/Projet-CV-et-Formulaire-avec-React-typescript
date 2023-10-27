import { Form_information_perso } from "../components/Form_information_perso";
import { Form_titre_du_cv } from "../components/Form_titre_du_cv";
import { Form_competences_tech } from "../components/Form_competences_tech";
import { Form_competences_ling } from "../components/Form_competences_ling";
import { Form_loisirs } from "../components/Form_loisirs";
import { Form_obj_pro } from "../components/Form_obj_pro";
import { Form_formation_diplome } from "../components/Form_formation_diplome";
import { Footer } from "../components/Footer";
import { useForm,SubmitHandler } from "react-hook-form";
import { error } from "console";
import emailjs from "@emailjs/browser"


type FormInputs= {
    nom: string,
    prenom: string,
    adresse: string,
    annee: string,
    age: string,
    email: string,
    situation: string,
    titre: string,
    objectif_pro: string,
    description: string,
    diplome: string, // Ajoutez le champ "diplome" et d'autres champs manquants
    Programmation_en_C: boolean,
    wordpress_Canva: boolean,
    SQL_Database: boolean,
    Informatique_Bureautique: boolean,
    Français: boolean,
    Anglais: boolean,
    Autre1: boolean,
    Autre_langue: string,
    Sport: boolean,
    Lecture: boolean,
    Bénévolat: boolean,
    Autre: boolean,
    Autre_loisir: string
}


export const Formulaire = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>()

    const onSubmit: SubmitHandler<FormInputs> = data =>{
        emailjs.send(
            'service_t9tdf88',
            'template_xu8jwlm',
            {
                nom: data.nom,
                prenom: data.prenom,
                adresse: data.adresse,
                annee: data.annee,
                age: data.age,
                email: data.email,
                situation: data.situation,
                titre: data.titre,
                objectif_pro: data.objectif_pro,
                description: data.description,
                diplome: data.diplome,
                Programmation_en_C: data.Programmation_en_C,
                wordpress_Canva: data.wordpress_Canva,
                SQL_Database: data.SQL_Database,
                Informatique_Bureautique: data.Informatique_Bureautique,
                Français: data.Français,
                Anglais: data.Anglais,
                Autre1: data.Autre1,
                Autre_langue: data.Autre_langue,
                Sport: data.Sport,
                Lecture: data.Lecture,
                Bénévolat: data.Bénévolat,
                Autre: data.Autre,
                Autre_loisir: data.Autre_loisir
            }
            ,'tyAcK1HxhuS8OMBPF',
        )
    }

    return(
        <main>
            <div className=" bg-indigo-500 rounded-lg ml">
            <h3 className=" font-extrabold mb-4 text-3xl text-center"> Formulaire de demande du CV</h3><hr />
            <form className="bg-indigo-500 rounded-lg mt-2 " onSubmit={handleSubmit(onSubmit)}>
                <div className="flex justify-end">
                    <div className="mr-80 mt-5">
                        <div>
                            <h4 className="rounded-lg bg-indigo-600 font-extrabold">INFORMATIONS PERSONNELLES</h4><hr />
                            <label className="block" htmlFor="nom">Nom:</label>
                            <input {...register("nom")} className="border-black" name="nom" id="nom" type="text" placeholder="Entrez un nom en majuscules"/>
                            {errors.nom && <p className="text-[red]">Le nom doit être en majuscules.</p>}<br />
                            <label className="block" htmlFor="prenom">Prénom:</label>
                            <input {...register("prenom")} className="border" name="prenom" id="prenom" type="text" placeholder="Entrez un Prénom"/><br />
                            <label className="block" htmlFor="email">Email:</label>
                            <input {...register("email", { required: true})} name="email" id="email" className="border" type="text" placeholder="Entrez un email"/>
                            {errors.email  && <p className="text-[red]"> Email error</p>}
                            <br />
                            <label className="block" htmlFor="annee">Année de naissance:</label>
                            <input {...register("annee")} name="annee" id="annee" className="border" type="text" placeholder="Entrez une année de naissance"/><br />
                            <label className="block" htmlFor="age">Age:</label>
                            <input {...register("age")} name="age" id="age" className="border" type="text" placeholder="Entrez un âge"/><br />
                            <label className="block" htmlFor="email">Adresse:</label>
                            <input {...register("adresse")} name="adresse" id="adresse" className="border" type="text" placeholder="Entrez une adresse"/><br />
                            <label htmlFor="situation">Marié ou Célibataire?</label><br />
                            <input {...register("situation")} name="situation" id="situation" className="border-black" type="radio" /> Marié <input {...register("situation")} name="situation" id="situation" type="radio" /> Célibataire
                        </div>
                        <div>
                            <h4 className="rounded-lg font-extrabold bg-indigo-600">TITRE DU CV</h4><hr />
                            <label htmlFor="titre">Titre:</label><br />
                            <input {...register("titre")} name="titre" id="titre" type="text" placeholder="Entrer un Titre"/>
                        </div>
                        <div>
                            <h4 className="rounded-lg bg-indigo-600 font-extrabold">OBJECTIF PROFESSIONNEL</h4><hr />
                            <label htmlFor="objectif_pro">Quel est votre Objectif Professionnel?</label><br />
                            <textarea {...register("objectif_pro")} id="objectif_pro" name="objectif_pro" placeholder="Entrer votre objectif professionnel"></textarea>
                        </div>
                        <div>
                            <h4 className="rounded-lg bg-indigo-600 font-extrabold">FORMATIONS ET DIPLÔMES</h4><hr />
                            <i>Quel est votre Diplôme?</i><br />
                            <select {...register("diplome")} name="diplome" id="diplome">
                                <option value="DUT">DUT</option>
                                <option value="Ingenieur">Ingenieur</option>
                                <option value="Master">Master</option>
                                <option value="Doctorat">Doctorat</option>
                            </select>
                            <br />
                            <label htmlFor="description">Description de la Formation</label><br />
                            <textarea {...register("description")} id="description" name="description" placeholder="Entrer la description de votre Formation"></textarea>
                            
                        </div>
                    </div>
                    <div className="mt-5">
                        <div>
                            <h4 className="rounded-lg bg-indigo-600 font-extrabold">COMPETENCES TECHNIQUES</h4><hr /> <br />
                            <label htmlFor="competences_tech">Quelles sont vos competences techniques?</label><br />
                            <input {...register("Programmation_en_C")} name="Programmation_en_C" id="Programmation_en_C" type="checkbox" /> Programmation_en_C <br />
                            <input {...register("wordpress_Canva")} name="wordpress_Canva" id="wordpress_Canva" type="checkbox" /> wordpress,Canva<br />
                            <input {...register("SQL_Database")} name="SQL_Database" id="SQL_Database" type="checkbox" /> SQL_Database <br />
                            <input {...register("Informatique_Bureautique")} name="Informatique_Bureautique" id="Informatique_Bureautique" type="checkbox" /> Informatique_Bureautique <br />
                        </div> <br />
                        <div>
                            <h4 className="bg-indigo-600 font-extrabold rounded-lg">COMPETENCES TECHNIQUES <hr /></h4> <br />
                            <label htmlFor="competences_ling">Quelles sont les langues que vous parlez?</label><br />
                            <input {...register("Français")} name="Français" id="Français" type="checkbox" /> Français <br />
                            <input {...register("Anglais")} name="Anglais" id="Anglais" type="checkbox" /> Anglais<br />
                            <input {...register("Autre1")} name="Autre" id="Autre" type="checkbox" /> Autre <br />
                            <input {...register("Autre_langue")} name="Autre_langue" id="Autre_langue" type="text" placeholder="Entrer une langue" /><br />
                        </div>
                        <div>
                            <br />
                            <h4 className="rounded-lg bg-indigo-600 font-extrabold">LOISIRS</h4><hr /> <br />
                            <label htmlFor="loisirs">Quelles sont vos loisirs?</label><br />
                            <input {...register("Sport")} name="Sport" id="Sport" type="checkbox" /> Sport <br />
                            <input {...register("Lecture")} name="Lecture" id="Lecture" type="checkbox" /> Lecture<br />
                            <input {...register("Bénévolat")} name="Bénévolat" id="Bénévolat" type="checkbox" /> Bénévolat<br />
                            <input {...register("Autre")} name="Autre" id="Autre" type="checkbox" /> Autre <br />
                            <input {...register("Autre_loisir")} name="Autre_loisir" id="Autre_loisir" type="text" placeholder="Entrer un loisir" /><br />
                        </div> 
                    </div>
                </div>
                    <div className="text-center mr-2 ml-2 ">
                        <input type="submit" className="flex-extrabold rounded-lg bg-white ml-20 mb-3 py-3 px-3" />
                    </div>
            </form>
            </div>
            <Footer/>
        </main>
            
            
        
    );
}