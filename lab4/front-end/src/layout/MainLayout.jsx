import React, {useState} from 'react';
import Header from "../modules/header/Header";
import Modal from "../components/UI/modal/Modal";
import Form from "../components/UI/form/Form";
import classes from "../pages/app/app.module.css";
import Button from "../components/UI/button/Button";
import Clock from "../components/UI/clock/Clock2";

const MainLayout = ({access, accessHandler}) => {
    const [modal, setModal] = useState(false);


    const handleAccessState = (access) => {
        accessHandler(access);
    }

    return (
        <div className={classes.app}>
            <Header title={'Лысенко Артём Константинович. Группа P32312, вариант 1346'}/>
            <Clock/>
            <Button type={'authorization'} onClick={() => setModal(true)}>
                Авторизация
            </Button>
            <Modal visible={modal} setVisible={setModal}>
                <Form checkAccess={handleAccessState} access={access}/>
            </Modal>
        </div>
    );
};

export default MainLayout;