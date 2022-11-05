import React from 'react';
import { useTranslation } from "react-i18next";

const Accueil = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("pages.accueil.bienvenu")}
    </div>
  )
}

export default Accueil
