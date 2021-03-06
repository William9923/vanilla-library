import Tab from '../components/Tab';
import InfoURLTextbox from './InfoURLTextbox';
import InfoTextareaInput from './InfoTextareaInput';


const InfoMenuTab = () => {

  const headers = [
    {
      "id" : "menu-text-tab",
      "value" : "Text",
      "control" : "menu-text-content",
    },
    {
      "id" : "menu-url-tab",
      "value" : "URL",
      "control" : "menu-url-content",
    },
  ];

  const contents = [
    {
      "id": "menu-text-content",
      "content": `${InfoTextareaInput()}`,
      "label": "menu-text-tab",
    },
    {
      "id": "menu-url-content",
      "content": `${InfoURLTextbox()}`,
      "label": "menu-url-tab",
    }
  ];
  
	const template = `
    ${Tab(headers,"tab-menu-header",contents,"tab-menu-content")}
  `;
  return template;
  
};

export default InfoMenuTab;