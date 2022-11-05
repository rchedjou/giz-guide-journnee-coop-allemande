import React, {useState, useEffect} from 'react';
//import { IntlProvider, FormattedMessage, FormattedDate } from 'react-intl';
import Paperbase from './Composants/Paperbase';
import {useLocation} from 'react-router-dom';
import { useTranslation } from "react-i18next";

import Accueil from './Pages/Accueil';
import Agenda from './Pages/Agenda';
import Carte from './Pages/Carte';
import Presse from './Pages/Presse';
import Faq from './Pages/Faq';
import Apropos from './Pages/Apropos';



function App() {
	const [title, setTitle] = useState("accueil");
	const [content, setContent] = useState(Accueil);
	const location = useLocation();
	const { t } = useTranslation();
	

	useEffect(()=>{
		//console.log(location.pathname);
		const parseTitle = location.pathname.replace(/\W/g, '');

		if(parseTitle==="accueil"){
			const titre = t('menu.accueil');
			setTitle(titre);
			setContent(Accueil);
		}
		if(parseTitle==="agenda"){
			const titre = t('menu.agenda');
			setTitle(titre);
			setContent(Agenda);
		}
		if(parseTitle==="carte"){
			const titre = t('menu.carte');
			setTitle(titre);
			setContent(Carte)
		}
		if(parseTitle==="presse"){
			const titre = t('menu.dossier_presse');
			setTitle(titre);
			setContent(Presse)
		}
		if(parseTitle==="faq"){
			const titre = t('faq');
			setTitle(titre);
			setContent(Faq)
		}
		if(parseTitle==="apropos"){
			setTitle("À Propos");
			setContent(Apropos);
		}
		
	  }, [location, t]);


	return (
		<Paperbase title={title} content={content}>

		</Paperbase>
	);
}

export default App;
