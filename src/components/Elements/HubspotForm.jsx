import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const HubSpotForm = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "45320833",
          formId: "91674bae-67e5-43b9-98e2-15d0ce240f85",
          target: "#hubspot-form",
          onFormSubmit: () => {
            navigate('/thanks');
          }
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="hubspot-form"></div>
  );
};
