import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BounceLoader from "react-spinners/BounceLoader";
import Login from "./pages/freelance/Login";
import LoginVerification from "./pages/freelance/LoginVerification";
import Resetpassword from "./pages/freelance/Resetpassword";
import ResponsiveAppBar from "./pages/ResponsiveAppBar";

//profile employer
import Checkout from "./pages/Entreprise/Checkout";
import Contact from "./pages/Entreprise/Contact";
import Entreprises from "./pages/Entreprise/Entreprise";
import Informations from "./pages/Entreprise/Informations";
import ProfilEnd from "./pages/Entreprise/ProfilEnd";
import Reseaux from "./pages/Entreprise/Reseaux";


import Account from "./pages/freelance/Account";
import EmailVerification from "./pages/freelance/EmailVerification";
import ForgetPassword from "./pages/freelance/ForgetPassword";
// import Accueil from "./components/dashbord/Accueil"
// import Projet from "./components/dashbord/Projet"
//import Paramettre from "./components/DashboadFreelance/Paramettre"

// dasboad freelance

// spameMarket
import DetailProduit from "./pages/spaceMarket/DetailProduit";
import Home from "./pages/spaceMarket/Home";
import Rapport from "./pages/spaceMarket/Rapport";
import Tendance from "./pages/spaceMarket/Tendance";

//import dashbord profil


import Commande from "./components/Dashbord1/CommandeProduit";
import Liste from "./components/Dashbord1/ListeProduit";

// import dashbord admin
import Index from "./pages/Home";

// not found page
import NotFound from './pages/not found/Index';

// About
import About from './pages/about/Index';

//medias
import Actualite from "./pages/medias/Actualite";
import ActualiteDetails from "./pages/medias/ActualiteDetails";
import DetailEvenement from "./pages/medias/DetailEvenement";
import DetailMarcherSPace from "./pages/medias/DetailMarcherSPace";
import Evenement from "./pages/medias/Evenement";
import MarcherSpace from "./pages/medias/MarcherSpace";

//contact
import Contact_us from "./pages/contact/Contact_us";

import './app.css';

//Consultant
import Consultant from "./pages/Consultant/Consultant";

//industrialisation
import Industrialisation from './pages/Industrialization/Industri';

function App() {

  const [loading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        {
          loading ?
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
              <BounceLoader
                color={'#3860d6'}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
            :
            <Routes>
              <Route index element={<Index />} />

              {/** authentification */}
              <Route path="/loginVerification" element={<LoginVerification />} />
              <Route path="/emailVerification" element={<EmailVerification />} />
              <Route path="/account" element={<Account />} />
              <Route path="/resetpassword" element={<Resetpassword />} />
              <Route path="/forgetpassword" element={<ForgetPassword />} />
              <Route path="/login" element={<Login />} />

              {/**section profil */}
              <Route path="/checkout" element={<ProfilEnd />} />
              <Route path="/Entreprises" element={<Entreprises />} />
              <Route path="/Informations" element={<Informations />} />
              <Route path="/Reseaux" element={<Reseaux />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/profi" element={<Checkout />} />


              {/* <Route path="/profil/fondation" element={<ProfilEntreprise />} />
      <Route path="/profil/reseau-sociaux" element={<ProfilReseaux />} />
      <Route path="/profil/contact" element={<ProfilContact />} />
      <Route path="/endProfil" element={<EndProfil />} />
      <Route path="/profil" element={<Profil />} /> */}

              {/* <Route path="/home" element={<HomeScreen/>} /> */}
              <Route path="/responsiveAppBar" element={<ResponsiveAppBar />} />

              {/**section routes des employeurs */}
              {/* <Route path="/DetailProjet" element={<DetailProjet />} />
              <Route path="/DashProfil" element={<DashProfil />} />
              <Route path="/Freelance" element={<Freelance />} />
              <Route path="/ProfilDash" element={<ProfilDash />} />
              <Route path="/AddProjet" element={<AddProjet />} />
              <Route path="/Projet" element={<Projet />} />
              <Route path="/Module" element={<Module />} /> */}

              {/* <Route path="/Dashbord/Accueil" element={<Accueil />} />
      <Route path="/Dashbord/projet" element={<Projet />} />*/}

              {/**section routes des freelance */}
              {/* <Route path="/DashAccueil" element={<DashAccueil />} />
              <Route path="/Projets" element={<Projets />} /> * inport as dash freelance */}
              {/* <Route path="/ProfilFreelance" element={<ProfilFreelance />} />
              <Route path="/AllProjet" element={<AllProjet />} />
              <Route path="/DahProfilFreelance" element={<DahProfilFreelance />} /> */}

              {/** Route de l'admin */}
              {/* <Route path="/produitAdmin" element={<Produit />} />
              <Route path="/utilisateur" element={<Utilisateur />} />
              <Route path="/accuiel" element={<Accueil />} />
              <Route path="/AddActuality" element={<PostActualite />} />
              <Route path="/AddEvenement" element={<AddEvenement />} />
              <Route path="/AddTendance" element={<AddTendance />} />
              <Route path="/AddRapport" element={<AddRapport />} /> */}

              {/* module space market */}
              <Route path="/SpaceMarket" element={<Home />} />
              <Route path="/DetailProduit" element={<DetailProduit />} />
              <Route path="/Tendance" element={<Tendance />} />
              <Route path="/Rapport" element={<Rapport />} />


              {/* module space market Route dashboard */}
              <Route path="/liste" element={<Liste />} />
              <Route path="/commande" element={<Commande />} />

              {/* <Route path="/freelancePage" element={<HomeScreen />} /> */}

              {/** not found */}
              <Route path="/NotFound" element={<NotFound />} />

              {/** About */}
              <Route path="/about" element={<About />} />

              {/** About */}
              <Route path="/actualite" element={<Actualite />} />
              <Route path="/actualite-Detail" element={<ActualiteDetails />} />
              <Route path="/evenement" element={<Evenement />} />
              <Route path="/MarcherSpace" element={<MarcherSpace />} />
              <Route path="/DetailMarcherSPace" element={<DetailMarcherSPace />} />
              <Route path="/DetailEvenement" element={<DetailEvenement />} />

              {/** Contact */}
              <Route path="/Contact_us" element={<Contact_us />} />

              {/* Consultant */}
              <Route path="/Consultant" element={<Consultant />} />

              {/* industrialisation */}
              <Route path="/industrialisation" element={<Industrialisation />} />


              <Route path="*" element={<Index />} />
            </Routes>
        }
      </BrowserRouter>
    </div>
  );
}

export default App;
