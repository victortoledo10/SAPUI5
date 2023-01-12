sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,MessageToast,JSONModel) {
        "use strict";

        return Controller.extend("es.victor.sapui5cero.controller.Main", {
            onInit: function () {

                 // Crear odata
                    var oData = {
                        recipient : {
                        name : "World"
                        }
                    };

                    var oModel = new JSONModel(oData);
                    this.getView().setModel(oModel);
                    
            //alert("UI5 is ready");  

            },

            //Evento desencadenado por el boton
            onShowHello : function () {
                // show a native JavaScript alert
                MessageToast.show("Hello World");
             }
            

        });
    });
