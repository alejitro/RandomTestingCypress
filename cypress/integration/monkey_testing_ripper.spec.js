/*describe('Los estudiantes under monkeys', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomClick(10);
    })
})
function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
                console.log("MonkeysFaltantes: ",monkeysLeft);
                return randomClick(monkeysLeft);
            }
            //setTimeout(randomClick,1000,monkeysLeft);
        });

    }
}*/

describe('Los estudiantes random Events', function() {
    it('visits los estudiantes and survives random event monkeys', function() {
        cy.visit('https://losestudiantes.co');
        cy.contains('Cerrar').click();
        cy.wait(1000);
        randomEvents(10);
    })
})

function randomEvents(eventsLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var eventsLeft = eventsLeft;
    if(eventsLeft > 0) {
        var randomEvent = getRandomInt(0,3);
        switch (randomEvent) {
          case 0:
            cy.get('a').then($links => {
                if($links.length>0){
                  var randomLink = $links.get(getRandomInt(0, $links.length));
                  console.log("variableRandomLink: ",randomLink);
                  if(!Cypress.dom.isHidden(randomLink)) {
                      cy.wrap(randomLink).click({force: true});
                      eventsLeft = eventsLeft - 1;
                      console.log("EventosFaltantes: ",eventsLeft);
                      return randomEvents(eventsLeft);
                  }
                }
                return randomEvents(eventsLeft);
                //setTimeout(randomEvent, 1000, eventsLeft);
            });
            break;
            case 1:
              cy.get('input').then($inputs => {
                  if($inputs.length>0){
                    var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                    console.log("variableRandomInput: ",randomInput);
                    if(!Cypress.dom.isHidden(randomInput)) {
                        cy.wrap(randomInput).click({force: true}).type("G6-Hangover",{force:true});
                        cy.get('body').type('{esc}', {force: true});
                        //cy.contains('Cancelar').click();
                        eventsLeft = eventsLeft - 1;
                        console.log("EventosFaltantes: ",eventsLeft);
                        return randomEvents(eventsLeft);
                    }
                  }
                  //setTimeout(randomEvent, 1000, eventsLeft);
                  return randomEvents(eventsLeft);
              });
              break;
              case 2:
                cy.get('select').then($selects => {
                    if($selects.length>0){
                      var randomSelect = $selects.get(getRandomInt(0, $selects.length));
                      console.log("variableRandomSelect: ",randomSelect);
                      if(!Cypress.dom.isHidden(randomSelect)) {
                          cy.wrap(randomSelect).eq(0).then(element => cy.wrap(randomSelect).select(element.val(), {force:true}));
                          eventsLeft = eventsLeft - 1;
                          console.log("EventosFaltantes: ",eventsLeft);
                          return randomEvents(eventsLeft);
                      }
                    }
                    return randomEvents(eventsLeft);
                    //setTimeout(randomEvent, 1000, eventsLeft);
                });
                break;
              case 3:
                cy.get('button').then($buttons => {
                    if($buttons.length>0){
                      var randomButtons = $buttons.get(getRandomInt(0, $buttons.length));
                      console.log("variableRandomButton: ",randomButtons);
                      if(!Cypress.dom.isHidden(randomButtons)) {
                          cy.wrap(randomButtons).click({force: true});
                          eventsLeft = eventsLeft - 1;
                          console.log("EventosFaltantes: ",eventsLeft);
                          return randomEvents(eventsLeft);
                      }
                    }
                    return randomEvents(eventsLeft);
                });
                break;
        }

    }
}
