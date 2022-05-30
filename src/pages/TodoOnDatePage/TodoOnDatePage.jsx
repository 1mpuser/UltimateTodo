import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import getDateFromDotFormat from '../../components/scripts/getDateFromDotFormat';

const TodoOnDatePage = () => {
    //month is extended for client comfort
    const router = useHistory();
    const tmpStr = router.location.pathname;
    const neededDate = getDateFromDotFormat( tmpStr.split('/')[2]);
    return (
        <div>
            {String(neededDate)}
        </div>
    );
}

export default TodoOnDatePage;