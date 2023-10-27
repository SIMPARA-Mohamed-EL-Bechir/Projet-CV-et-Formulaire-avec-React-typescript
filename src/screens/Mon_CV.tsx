import { About } from "../components/About";
import { Title } from "../components/Title";
import { Objectif_pro } from "../components/Objectif_pro";
import { Formation_Diplome } from "../components/Formation_Diplome";
import { Competences_Technques } from "../components/Competences_Techniques";
import { Competences_Lingustiques } from "../components/Competences_Lingustiques";
import { Loisirs } from "../components/Loisirs";
import { Footer } from "../components/Footer";
export const Mon_CV = () => {
    return(
        <main>
          <div className="bg-amber-200 rounded-r-lg">
          <div className=""><About/></div>
          <Title/>
          <Objectif_pro/>
          <div className="flex justify-end">
          <div className="text-left mr-80 bg-amber-600 rounded-b-lg">
          <Formation_Diplome/>
          </div>
          <div className="text-right mt-5 bg-amber-600 rounded-r-lg">
          <Competences_Technques/>
          <Competences_Lingustiques/>
          <Loisirs/>
          </div>
          </div>
          </div>
          <Footer/>
        </main>
    );
}