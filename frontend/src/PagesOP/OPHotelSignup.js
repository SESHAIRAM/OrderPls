import React, { useEffect, useRef, useState } from 'react'
import { OPButton } from '../ComponentOP/OPButton'
import { OPLoader } from '../ComponentOP/OPLoader';
import { useNavigate } from 'react-router-dom';
import { OPDropDown } from '../ComponentOP/OPDropDown';
import { OPTextBox } from '../ComponentOP/OPTextBox';
import { OPCheckBox } from '../ComponentOP/OPCheckBox';
import { OPLink } from '../ComponentOP/OPLink';
import { OPValidations } from '../CommonOP/OPValidations';
import { useDispatch, useSelector } from 'react-redux';
import { setlogininfo } from '../brewStore/AppState';

export const OPHotelSignup = () => {
    const [startInit, setStartInit] = useState(true);
    const [startRender, setStartRender] = useState(false);
    const [startLoader, setStartLoader] = useState(true);
    const [rerender, setRerender] = useState(false);

    const ctlAttribute = useRef([]);

    const navigate = useNavigate();
    const validate = OPValidations();
    const dispatchappStore = useDispatch();
    const getAppStoreData = useSelector((state) => state.appstate.login_info);

    function initControl() {
        dispatchappStore(
            setlogininfo({
                ...getAppStoreData,
                isloggedin: false,
                burnerid: 0,
            })
        );
        let ctl_array = [
            {
                /*txt:Hotel Name : 0*/
                arrayindex: 0,
                csstheme: {
                    labletext: "Hotel Name",
                    classname: "form-control",
                    id: "txt_hotelcode",
                    inputtype: "text",
                    length: 50,
                    readonly: false,
                    hinttext: "Enter your Hotel Name that want to be Reegistor in Our Website",
                },
                inputvalue: "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    errorshow: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "Alpha",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*txt:Email Address : 1*/
                arrayindex: 1,
                csstheme: {
                    labletext: "Email Address",
                    classname: "form-control",
                    id: "txt_emailaddress",
                    inputtype: "text",
                    length: 50,
                    readonly: false,
                    hinttext: "Enter your Registered Email Address",
                },
                inputvalue: "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    errorshow: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "email",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*txt:password : 2*/
                arrayindex: 2,
                csstheme: {
                    labletext: "Password",
                    classname: "form-control",
                    id: "txt_password",
                    inputtype: "text",
                    length: 50,
                    readonly: false,
                    hinttext: "Enter your Password",
                },
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    errorshow: "",
                    isvalidation: false,
                },
                inputvalue: "",
                validate: {
                    mandatory: true,
                    datatype: "alphanumeric",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*txt:Confirm password : 3*/
                arrayindex: 3,
                csstheme: {
                    labletext: "Confirm Password",
                    classname: "form-control",
                    id: "txt_confirmpassword",
                    inputtype: "text",
                    length: 50,
                    readonly: false,
                    hinttext: "Enter your Confirm Password",
                },
                inputvalue: "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    errorshow: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "alphanumeric",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*txt:PAN : 4*/
                arrayindex: 4,
                csstheme: {
                    labletext: "PAN",
                    classname: "form-control",
                    id: "txt_pan",
                    inputtype: "text",
                    length: 10,
                    readonly: false,
                    hinttext: "Enter your Pan",
                },
                inputvalue: "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    errorshow: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "alphanumeric",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*txt:TAN : 5*/
                arrayindex: 5,
                csstheme: {
                    labletext: "TAN",
                    classname: "form-control",
                    id: "txt_tan",
                    inputtype: "text",
                    length: 10,
                    readonly: false,
                    hinttext: "Enter your Tan",
                },
                inputvalue: "",
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    errorshow: "",
                    isvalidation: false,
                },
                validate: {
                    mandatory: true,
                    datatype: "alphanumeric",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*txt:GST : 6*/
                arrayindex: 6,
                csstheme: {
                    labletext: "GST",
                    classname: "form-control",
                    id: "txt_gst",
                    inputtype: "text",
                    length: 15,
                    readonly: false,
                    hinttext: "Enter your Gst",
                },
                tooltip: {
                    place: "bottom",
                    classname: "tooltip-react",
                    isfocus: "",
                    errorshow: "",
                    isvalidation: false,
                },
                inputvalue: "",
                validate: {
                    mandatory: true,
                    datatype: "alphanumeric",
                },
                error: {
                    errorshow: false,
                    errormsg: "The field is mandatory",
                },
            },
            {
                /*cb:Remember Me : 7*/
                arrayindex: 7,
                csstheme: {
                    labletext: "Wait for Login",
                    classname: "form-check-input",
                    id: "cb_rememberme",
                    checked: true,
                },
            },
            {
                /*btn:Login : 8*/
                arrayindex: 8,
                csstheme: {
                    labletext: "Signup",
                    classname: "btn btn-primary pad-btn",
                    id: "btn_signup",
                },
            },
            {
                /*Ctl:Log in : 9*/
                arrayindex: 9,
                csstheme: {
                    labletext: " Log in.",
                    classname: "text-purple link-hover",
                    id: "cb_login",
                },
                to: "/hotel/hotel-login"
            },

        ]
        ctlAttribute.current = ctl_array;
        setStartInit(false);
        setStartRender(true);
        setStartLoader(false);
    }

    function handleCheckBox(e) {

    }
    function fnLogin() {
        let canFormSubmit = true;
        let err = [];
        let l_validate = [];
        err.push(validate(ctlAttribute.current[6]))
        err.push(validate(ctlAttribute.current[5]))
        err.push(validate(ctlAttribute.current[4]))
        err.push(validate(ctlAttribute.current[3]))
        err.push(validate(ctlAttribute.current[2]))
        err.push(validate(ctlAttribute.current[1]))
        err.push(validate(ctlAttribute.current[0]))

        for (let i = 0; i < err.length; i++) {
            if (err[i].founderror == true) {
                canFormSubmit = false;
                ctlAttribute.current[err[i].arrayindex].error.errorshow = true;
                l_validate.push(err[i])
            }
        }
        if (canFormSubmit == false) {
            ctlAttribute.current[l_validate[l_validate.length - 1].arrayindex].tooltip.isvalidation = true;
            ctlAttribute.current[l_validate[l_validate.length - 1].arrayindex].tooltip.isfocus.focus();
            setRerender(!rerender);
        }
        else {
            navigate("/login/user")
        }
    }
    function handleButtonClick(e) {
        const btn_id = e.target.id;
        switch (btn_id) {
            case "btn_signup":
                fnLogin();
                break;

        }
    }
    useEffect(() => {
        if (startInit == true)
            initControl();
    }, [startInit]);
    return (<>
        {startLoader && (<OPLoader />)}
        {startRender && (
            <div className="account-page">
                <div className="main-wrapper">
                    <div className="account-content">
                        <div className='mt-5em'></div>
                        <div className="d-flex flex-wrap w-100 h-100 justify-content-center">
                            <div className='d-flex justify-content-center flex-wrap p-4 w-50 bg-backdrop'>
                                <div className='flex-fill'>
                                    <div className='mx-auto'>
                                        <div className='text-center mb-4'>
                                            <img
                                                src={require("../assets/img/logo.png")}
                                                alt="Order pls"
                                            ></img>
                                        </div>
                                        <div className='mb-4'>
                                            <h4>Hotel</h4>
                                            <p>This page is used to Signup & Create an New Account for Hotel </p>
                                        </div>
                                        <div className='mb-3'>
                                            {/*txt:Hotel Name : 0*/}
                                            <OPTextBox
                                                ctl_Attribute={ctlAttribute.current[0]}
                                                rerender={rerender}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            {/*txt:Email Address : 1*/}
                                            <OPTextBox
                                                ctl_Attribute={ctlAttribute.current[1]}
                                                rerender={rerender}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            {/*txt:password : 2*/}
                                            <OPTextBox
                                                ctl_Attribute={ctlAttribute.current[2]}
                                                rerender={rerender}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            {/*txt:Confirm password : 3*/}
                                            <OPTextBox
                                                ctl_Attribute={ctlAttribute.current[3]}
                                                rerender={rerender}
                                            />
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12 d-flex justify-content-between mb-3'>
                                                <div className="col-sm-3">
                                                    {/*txt:Pan : 4*/}
                                                    <OPTextBox
                                                        ctl_Attribute={ctlAttribute.current[4]}
                                                        rerender={rerender}
                                                    />
                                                </div>
                                                <div className="col-sm-3">
                                                    {/*txt:Tan : 5*/}
                                                    <OPTextBox
                                                        ctl_Attribute={ctlAttribute.current[5]}
                                                        rerender={rerender}
                                                    />
                                                </div>
                                                <div className="col-sm-3">
                                                    {/*txt:Gst : 6*/}
                                                    <OPTextBox
                                                        ctl_Attribute={ctlAttribute.current[6]}
                                                        rerender={rerender}

                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='d-flex align-items-center justify-content-between mb-3'>
                                            {/*cb:Remember Me : 4*/}
                                            <OPCheckBox
                                                ctl_Attribute={ctlAttribute.current[7]}
                                                handleCheckBox={handleCheckBox}
                                            />
                                        </div>
                                        <div className='d-grid mx-auto mb-3'>
                                            {/*btn:Login : 5*/}
                                            <OPButton
                                                ctl_Attribute={ctlAttribute.current[8]}
                                                handleButtonClick={handleButtonClick}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <h6>Already a member?
                                                <OPLink
                                                    ctl_Attribute={ctlAttribute.current[9]}
                                                />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        )}
    </>)
}
