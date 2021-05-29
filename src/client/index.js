import { checkForName } from './js/nameChecker';
import { handleSubmit } from './js/formHandler';
//import { test } from './js/formHandler';
import { postData } from './js/post_handling';
import { postGet } from './js/post_handling';

import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

console.log(checkForName);

/*
export {
    checkForName,
    handleSubmit,
    test
   }
*/

export {
    checkForName,
    handleSubmit,
    postData,
    postGet
}


console.log("CHANGE!!");
