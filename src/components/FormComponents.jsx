import { object, string, bool } from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useState } from "react";
import Title from "./Title";

const userSchema = object().shape({
  prenom: string().required("Votre prénom est requis"),
  nom: string().required("Votre nom est requis"),
  email: string()
    .email("L'adresse renseigné est invalide")
    .required("L'email est requis"),
  phoneNumber: string().length(10),
  town: string(),
  country: string(),
  zipCode: string().length(5),
  consent: bool().oneOf([true], "Vous devez accepter les conditions"),
});

const FormComponents = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isOnError, setIsOnError] = useState(false);

  const handleSubmit = async (values) => {
    setIsOnError(false);
    const payload = new FormData();
    payload.set("prenom", values.prenom);
    payload.set("nom", values.nom);
    payload.set("email", values.email);
    payload.set("sms", values.phoneNumber);
    payload.set("town", values.town);
    payload.set("country", values.country);
    payload.set("zipCode", values.zipCode);

    try {
      const response = await axios.post(
        "https://multigraphic.fr/wp-json/contact-form-7/v1/contact-forms/5180/feedback",
        payload
      );
      console.log(response);
      setIsSubmitted(true);
    } catch (e) {
      setIsOnError(true);
      console.log(e);
    }
  };

  return (
    <>
      {isSubmitted ? (
        <div className="success-message">
          <h2>Merci pour votre inscription et rendez-vous</h2>
          <strong>le 4 et 5 octobre 2023 - 10h00 - 18h30</strong>
          <p>TOULOUSE - Domaine de Montjoie</p>
          <a href="/plan_acces_jpo.pdf" target="_blank">
            Télécharger les infos pratiques au format PDF
          </a>
        </div>
      ) : (
        <>
          <Title />
          <Formik
            initialValues={{
              prenom: "",
              nom: "",
              email: "",
              phoneNumber: "",
              town: "",
              country: "",
              zipCode: "",
              consent: false,
            }}
            validationSchema={userSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ errors, touched }) => (
              <Form>
                <label htmlFor="prenom">
                  <span>
                    Prénom <span className="required">*</span>
                  </span>
                  <Field
                    name="prenom"
                    ariaLabel="Votre prénom"
                    className={
                      errors.prenom && touched.prenom ? "error-field" : null
                    }
                  />
                  <ErrorMessage
                    name="prenom"
                    component="div"
                    className="error-message"
                  />
                </label>
                <label htmlFor="nom">
                  <span>
                    Nom <span className="required">*</span>
                  </span>
                  <Field
                    name="nom"
                    ariaLabel="Votre nom"
                    className={errors.nom && touched.nom ? "error-field" : null}
                  />
                  <ErrorMessage
                    name="nom"
                    component="div"
                    className="error-message"
                  />
                </label>
                <label htmlFor="nom">
                  <span>
                    E-mail <span className="required">*</span>
                  </span>
                  <Field
                    name="email"
                    ariaLabel="Votre email"
                    type="email"
                    className={
                      errors.email && touched.email ? "error-field" : null
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-message"
                  />
                </label>
                <label htmlFor="phoneNumber">
                  Téléphone
                  <Field
                    name="phoneNumber"
                    ariaLabel="Votre numéro de téléphone"
                    className={
                      errors.phoneNumber && touched.phoneNumber
                        ? "error-field"
                        : null
                    }
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    className="error-message"
                  />
                </label>
                <label htmlFor="town" className="town">
                  Ville
                  <Field
                    name="town"
                    ariaLabel="Votre ville de résidence"
                    className={
                      errors.town && touched.town ? "error-field" : null
                    }
                  />
                  <ErrorMessage
                    name="town"
                    component="div"
                    className="error-message"
                  />
                </label>
                <label htmlFor="country">
                  Pays
                  <Field
                    name="country"
                    ariaLabel="Votre pays de résidence"
                    className={
                      errors.country && touched.country ? "error-field" : null
                    }
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="error-message"
                  />
                </label>
                <label htmlFor="zipCode">
                  Code postal
                  <Field
                    name="zipCode"
                    ariaLabel="Votre code postal"
                    className={
                      errors.zipCode && touched.zipCode ? "error-field" : null
                    }
                  />
                  <ErrorMessage
                    name="zipCode"
                    component="div"
                    className="error-message"
                  />
                </label>
                <div className="required-field">
                  <span className="required">*</span> Champs obligatoire
                </div>
                <label htmlFor="consent" className="consent">
                  <Field
                    type="checkbox"
                    name="consent"
                    className={
                      errors.consent && touched.consent ? "error-field" : null
                    }
                  />
                  En cochant cette case, vous acceptez les conditions
                  d’utilisation et la politique de confidentialité du site. Les
                  informations recueillies sur ce formulaire sont enregistrées
                  dans un fichier pour répondre à vos demandes et sont
                  conservées pendant 365 jours. Conformément à la loi
                  «informatique et libertés», vous pouvez exercer votre droit
                  d’accès aux données vous concernant et les faire rectifier en
                  nous contactant par mail sur web@multigraphic.fr
                  <ErrorMessage
                    name="consent"
                    component="div"
                    className="error-message"
                  />
                </label>
                {isOnError && (
                  <div className="fatal-error">
                    <strong>
                      Une erreur c&apos;est produite, veuillez réessayer plus
                      tard
                    </strong>
                  </div>
                )}
                <button type="submit">Valider mon inscription</button>
              </Form>
            )}
          </Formik>
        </>
      )}
    </>
  );
};

export default FormComponents;
