var myApp = angular.module('myApp', []);

//myApp.directive('myDirective', function() {});  
myApp.factory('LS', function ($window, $rootScope) {
  return {
    setData: function (key, val) {
      $window.localStorage && $window.localStorage.setItem(key, val);
      return this;
    },
    getData: function (key) {
      return $window.localStorage && $window.localStorage.getItem(key);
    }
  };
});
function MaintCtrl($scope, LS) {
  $scope.titleGrant = 'Great Talents United Soccer League';


  $scope.categories = [
    { id: 'NA', name: 'Select a Division' },
    { id: 'MD', name: 'Major Division' },
    { id: 'MOD', name: 'Mens Open Division' },
    { id: 'GD', name: 'Girls Division' },
    { id: 'TD', name: '2000 Division' },
    { id: 'TTD', name: '2002 Division' },
    { id: 'TRD', name: '2003 Division' },
    { id: 'TFD', name: '2004 Division' },
    { id: 'TFD', name: '2005 Division' },
    { id: 'TSD', name: '2006 Division' },
    { id: 'TED', name: '2007 Division' },
    { id: 'TGD', name: '2008 Division' },
    { id: 'TND', name: '2009 Division' },
    { id: 'TTED', name: '2010 Division' },
    { id: 'ALD', name: 'All Division' }
  ];

  $scope.itemSelected = $scope.categories[0];

  $scope.titleSoccerTeam = 'Soccer Team';
  $scope.titleIdCard = 'ID Cards';
  $scope.titleSanctionCards = 'Sanction Cards';
  $scope.titleFacilityAdmFee = 'Facility Adm Fee';
  $scope.titlesoccerFields = 'Soccer Fields';
  $scope.titleTimekeeperLine = 'Game Timekeeper / Line Man';
  $scope.titleReferees = 'Referees';
  $scope.titleSecutityGuard = 'Security Guard';
  $scope.titleDoorKeeping = 'Door keeping';
  $scope.titleAdmFacilityCollertor = 'Facility Adm Collector';
  $scope.titleMaintenance = 'Maintenance';
  $scope.titlePrizes = 'Prizes';

  loadFields();

  
  function loadFields(){
    //fields Soccer teams
    $scope.titleteamSAFee = 'Team Season Admission Fee';
    $scope.titledivisionTeams = 'Division Teams';
    $scope.titleteamMembers = 'Team Members';
    $scope.titledivisionMembers = 'Division Members';
    $scope.titleseasonRRounds = 'Season Regular Rounds';
    $scope.titleseasonPRounds = 'Season Play Off Rounds';
    $scope.titleseasonTPGames = 'Season Total Play Off Games';
    $scope.titlegameLengthMin =  'Game Length in Min';
    $scope.titlegamesPRound =  'Games Per Rounds';
    $scope.titletotalGamesSeason =  'Total Games Per Season';
    //fields Id card
    $scope.titlememberCardFee = 'Member Id Card Season Fee';
    $scope.titlememberCardFeeRepla = 'Member Id Card Replacement Fee';
    $scope.titleidCardsTeamMembers = 'Team Members Average Obtaining Id Cards';
    $scope.titleidCardsDivisionMembers = 'Division Members Average Obtaining Id Cards';
    $scope.titleidCardsAIncomeTeam = 'Id Cards Average Income Per Team';
    $scope.titleidCardsAIncomeTeamRepla = 'Id Cards Replacement Average Income Per Team';
    $scope.titleidCardsIncomeDivison = 'Id Cards Income Per Division';
    $scope.titleidCardsIncomeDivisonRepla = 'Id Cards Replacement Income Per Division';
    $scope.titleidCardsIncomeClubRepla = 'Soccer Club Id Cards Replacement Income';
    
    //fields sanction cards
    $scope.titlecardYellowRegular = 'Regular Yellow Card Fine';
    $scope.titlecardYellowAggressive = 'Aggressive Yellow Card Fine';
    $scope.titlecardRedFine = 'Red Card Fine';
    $scope.titlesanctionFine = 'Sanction Fine';
    $scope.titlecardsYellowTotalSeason = 'Season Total Regular Yellow Cards Income';
    $scope.titlecardsYellowTotalSeasonAggre = 'Season Total Aggressive Yellow Cards Income';
    $scope.titlecardsRedTotalSeason = 'Season Total Red Cards Income';
    $scope.titlesanctionsTotalSeason = 'Season Total Sanctions Income';
    
    //fields FacilityAdmFee
    $scope.titleadmissionFacilityFee = 'Facility Game Admission Fee';
    $scope.titleassistanceTeamMembersRound = 'Team Members Assistance by Round';
    $scope.titleassitanceDivisionMembersRound = 'Division Members Assistance by Round';
    $scope.titlefeeTeamGameRound = 'Team Game Fee Income Per Round';
    $scope.titlefeeDivisionRound = 'Division Game Fee Income Per Round';
    $scope.titledivionGameFeeInRound = 'Division Game Fee Income Per Round';
    $scope.titlesoccerClubInRound = 'Soccer Club Income Per Round';
    
    //fields soccerFields
    $scope.titlefieldsNumberFacility = 'Number of Fields at Facility';
    $scope.titlefieldCostHr = 'Soccer Field Cost Per Hr';
    $scope.titlefieldsCostRound = 'Soccer Fields Cost Per Round';
    $scope.titlefieldsCostGame = 'Soccer Field Cost Per Game';
    $scope.titlefieldCostMin = 'Soccer Field Cost Per Min';
    $scope.titletimeNeededHrsRound = 'Time Needed In Hrs. To Play Round';
    $scope.titleroundLenthHrs = 'Round Length In Hrs';
    $scope.titlegameLengthMin = 'Game Length in Min.';
    $scope.titlegamesPRound = 'Games Per Rounds';
    $scope.titletotalGamesSeason = 'Total Games Per Season';

    //fields timer keeper
    $scope.titletimerkeeperLineMCostHr = 'Timekeeper / Line Man Cost Per Hr';
    $scope.titletimerkeeperLineMGame = 'Timekeeper / Line Man At Game';
    $scope.titletimerkeeperLineMCostRound = 'Timekeeper / Line Man Cost Per Round';
    $scope.titletimerkeeperLineMCostGame = 'Timekeeper / Line Man Cost Per Game';
    $scope.titletimerkeeperLineMCostMin = 'Timekeeper / Line Man Cost Per Min';

    //fields referee
    $scope.titlerefereeCostHr = 'Referee Cost Per Hr';
    $scope.titlerefereesAtGame = 'Referees At Game';
    $scope.titlerefereesCostRound = 'Referees Cost Per Round';
    $scope.titlerefereeCostGame = 'Referee Cost Per Game';
    $scope.titlerefereeCostMin = 'Referee Cost Per Min';

    //fields security guard
    $scope.titlesecutityCostHr = 'Security Guard Cost Per Hr';
    $scope.titlesecutityOnSite = 'Security Guards On-site';
    $scope.titlesecurityNumFieldsFacility = 'Number of Fields At Facility';
    $scope.titlesecurityCostRound = 'Security Guard Cost Per Round';
    $scope.titlesecurityCostGame = 'Security Guard Cost Per Game';
    $scope.titlesecurityCostMin = 'Security Guard Cost Per Min';

    //fields security guard
    $scope.titledoorKeepCostHr = 'Doorkeeper Cost Per Hr';
    $scope.titledoorKeepOnSite = 'Doorkeepers On-site';
    $scope.titledoorKeepAtFacility = 'Number of Fields At Facility';
    $scope.titledoorKeepCostRound = 'Door keeping Cost Per Round';
    $scope.titledoorKeepCostGame = 'Door keeping Cost Per Game';
    $scope.titledoorKeepCostMin = 'Door keeping Cost Per Min';

    //fields adminssion collertor
    $scope.titleadminssionCollertorCostHr = 'Admission Collector Cost Per Hr';
    $scope.titleadminssionCollertorsOnSite = 'Admission Collectors On-site';
    $scope.titleadminssionCollertorAtFacility = 'Number of Fields At Facility';
    $scope.titleadminssionCollertorCostRound = 'Admission Collector Cost Per Round';
    $scope.titleadminssionCollertorCostGame = 'Admission Collector Cost Per Game';
    $scope.titleadminssionCollertorCostMin = 'Admission Collector Cost Per Min';
    
    //fieds paramedic 
    $scope.titleparamedicCostHr = 'Paramedic Cost Per Hr';
    $scope.titleparamedicsOnSite = 'Paramedics On-site';
    $scope.titleparamedicAtFacility = 'Number of Fields At Facility';
    $scope.titleparamedicCostRound = 'Paramedic Cost Per Round';
    $scope.titleparamedicCostGame = 'Paramedic Cost Per Game';
    $scope.titleparamedicCostMin = 'Paramedic Cost Per Min';
  };
    


  $scope.onCategoryChange = function () {
    loadFields();
    if ($scope.itemSelected.id != 'NA' && $scope.itemSelected.id != "ALD") {
      $scope.titleDivision = $scope.itemSelected.name;
      //alert("Selected Value: " + $scope.itemSelected.id + "\nSelected Text: " + $scope.itemSelected.name);

      $scope.totalCost = 0;
      $scope.totalIncome = 0;
      $scope.totalBalance = 0;

      //first column Soccer Team
      $scope.teamSAFee = LS.getData($scope.itemSelected.id + '-teamSAFee');
      $scope.divisionTeams = LS.getData($scope.itemSelected.id + '-divisionTeams');
      $scope.teamMembers = LS.getData($scope.itemSelected.id + '-teamMembers');
      $scope.divisionMembers = $scope.divisionTeams * $scope.teamMembers;

      $scope.multDivisionMembers = function () {
        
      };

      //secund column
      $scope.seasonRRounds = LS.getData($scope.itemSelected.id + '-seasonRRounds');
      $scope.seasonPRounds = LS.getData($scope.itemSelected.id + '-seasonPRounds');
      $scope.seasonTPGames = LS.getData($scope.itemSelected.id + '-seasonTPGames');
      $scope.gameLengthMin = LS.getData($scope.itemSelected.id + '-gameLengthMin');
      $scope.gamesPRound = $scope.divisionTeams / 2;
      $scope.totalGamesSeason = ($scope.seasonRRounds * $scope.gamesPRound) + parseInt($scope.seasonTPGames)
      $scope.divisionAFeeTotalInSeason = $scope.teamSAFee * $scope.divisionTeams;

      $scope.soccerteamSecundCal = function () {
        
      };


      //Id Cards
      $scope.memberCardFee = LS.getData($scope.itemSelected.id + '-memberCardFee');
      $scope.memberCardFeeRepla = LS.getData($scope.itemSelected.id + '-memberCardFeeRepla');
      $scope.idCardsTeamMembers = LS.getData($scope.itemSelected.id + '-idCardsTeamMembers');
      $scope.idCardsDivisionMembers = $scope.divisionTeams * $scope.idCardsTeamMembers;
      $scope.idCardsAIncomeTeam = $scope.memberCardFee * $scope.idCardsTeamMembers;
      $scope.idCardsAIncomeTeamRepla = $scope.memberCardFeeRepla * $scope.idCardsTeamMembers / 10;
      $scope.idCardsIncomeDivison = $scope.idCardsDivisionMembers * $scope.memberCardFee;
      $scope.idCardsIncomeDivisonRepla = $scope.idCardsDivisionMembers / 10 * $scope.memberCardFeeRepla;
      $scope.divisionIdCardsFeeIncomeSeason = $scope.idCardsIncomeDivison
        + $scope.idCardsIncomeDivisonRepla;

      $scope.idCardsThirdCal = function () {
        
      };

      //Secund row

      //Sanction Cards
      $scope.cardYellowRegular = LS.getData($scope.itemSelected.id + '-cardYellowRegular');
      $scope.cardYellowAggressive = LS.getData($scope.itemSelected.id + '-cardYellowAggressive');
      $scope.cardRedFine = LS.getData($scope.itemSelected.id + '-cardRedFine');
      $scope.sanctionFine = LS.getData($scope.itemSelected.id + '-sanctionFine');
      $scope.cardsYellowTotalSeason = $scope.cardYellowRegular * 2 * $scope.totalGamesSeason;
      $scope.cardsYellowTotalSeasonAggre = $scope.cardYellowAggressive / 2 * $scope.totalGamesSeason;
      $scope.cardsRedTotalSeason = $scope.cardRedFine / 4 * $scope.totalGamesSeason;
      $scope.sanctionsTotalSeason = $scope.sanctionFine / 10 * $scope.divisionTeams;
      $scope.divisionSanctionsTotalSeason = $scope.cardsYellowTotalSeason
        + $scope.cardsYellowTotalSeasonAggre
        + $scope.cardsRedTotalSeason
        + $scope.sanctionsTotalSeason;

      $scope.sanctionCardsCal = function () {
        
      };


      //Facility Admission Fee
      $scope.admissionFacilityFee = LS.getData($scope.itemSelected.id + '-admissionFacilityFee');
      $scope.assistanceTeamMembersRound = LS.getData($scope.itemSelected.id + '-assistanceTeamMembersRound');
      $scope.assitanceDivisionMembersRound = $scope.assistanceTeamMembersRound * $scope.divisionTeams;
      $scope.feeTeamGameRound = $scope.admissionFacilityFee * $scope.assistanceTeamMembersRound;
      $scope.feeDivisionRound = $scope.admissionFacilityFee * $scope.assitanceDivisionMembersRound;
      $scope.admissionFeeDivisionTotalSeason = $scope.totalGamesSeason * 2 * $scope.admissionFacilityFee * $scope.assistanceTeamMembersRound;

      $scope.facilityAdmCal = function () {
        

      };


      //Thrid row

      //Soccer Fields
      $scope.fieldsNumberFacility = LS.getData($scope.itemSelected.id + '-fieldsNumberFacility');
      $scope.fieldCostHr = LS.getData($scope.itemSelected.id + '-fieldCostHr');
      $scope.fieldCostMin = $scope.fieldCostHr / 60;
      $scope.fieldsCostGame = $scope.fieldCostMin * $scope.gameLengthMin;
      $scope.fieldsCostRound = $scope.fieldsCostGame * $scope.gamesPRound;
      $scope.roundLenthHrs = $scope.gameLengthMin * $scope.gamesPRound / 60;
      $scope.timeNeededHrsRound = $scope.roundLenthHrs / $scope.fieldsNumberFacility;

      $scope.fieldsSoccerTotalCostSeason = $scope.totalGamesSeason * $scope.fieldsCostGame;

      $scope.soccerFieldsCal = function () {
        
      };



      //Game Timekeeper / Line Man
      $scope.timerkeeperLineMCostHr = LS.getData($scope.itemSelected.id + '-timerkeeperLineMCostHr');
      $scope.timerkeeperLineMGame = LS.getData($scope.itemSelected.id + '-timerkeeperLineMGame');
      $scope.timerkeeperLineMCostMin = $scope.timerkeeperLineMCostHr / 60 * $scope.timerkeeperLineMGame;
      $scope.timerkeeperLineMCostGame = $scope.timerkeeperLineMCostMin * $scope.gameLengthMin;
      $scope.timerkeeperLineMCostRound = $scope.timerkeeperLineMCostGame * $scope.gamesPRound;
      $scope.timerkeeperLineMCostSeason = $scope.timerkeeperLineMCostGame * $scope.totalGamesSeason;

      $scope.timekeeperCal = function () {

       
      };

      //Ford row

      //Referees
      $scope.refereeCostHr = LS.getData($scope.itemSelected.id + '-refereeCostHr');
      $scope.refereesAtGame = LS.getData($scope.itemSelected.id + '-refereesAtGame');
      $scope.refereeCostMin = $scope.refereeCostHr / 60 * $scope.refereesAtGame;
      $scope.refereeCostGame = $scope.refereeCostMin * $scope.gameLengthMin;
      $scope.refereesCostRound = $scope.refereeCostGame * $scope.gamesPRound;
      $scope.refereesCostTotalSeason = $scope.refereeCostGame * $scope.totalGamesSeason;

      $scope.refereesCal = function () {
        
      };


      //Security Guard
      $scope.secutityCostHr = LS.getData($scope.itemSelected.id + '-secutityCostHr');
      $scope.secutityOnSite = LS.getData($scope.itemSelected.id + '-secutityOnSite');
      $scope.securityNumFieldsFacility = LS.getData($scope.itemSelected.id + '-securityNumFieldsFacility');
      $scope.securityCostMin = $scope.secutityCostHr / 60 * $scope.secutityOnSite;
      $scope.securityCostGame = $scope.securityCostMin * $scope.gameLengthMin;
      $scope.securityCostRound = $scope.securityCostGame * $scope.gamesPRound / $scope.securityNumFieldsFacility;
      $scope.securityTotalCostSeason = $scope.totalGamesSeason * $scope.securityCostGame / $scope.securityNumFieldsFacility;

      $scope.securityGuardCal = function () {
        
      };

      //fifth row

      //Door keeping
      $scope.doorKeepCostHr = LS.getData($scope.itemSelected.id + '-doorKeepCostHr');
      $scope.doorKeepOnSite = LS.getData($scope.itemSelected.id + '-doorKeepOnSite');
      $scope.doorKeepAtFacility = LS.getData($scope.itemSelected.id + '-doorKeepAtFacility');
      $scope.doorKeepCostMin = $scope.doorKeepCostHr / 60 * $scope.doorKeepOnSite;
      $scope.doorKeepCostGame = $scope.doorKeepCostMin * $scope.gameLengthMin;
      $scope.doorKeepCostRound = $scope.doorKeepCostGame * $scope.gamesPRound / $scope.doorKeepAtFacility;
      $scope.doorKeepCostTotalSeason = $scope.totalGamesSeason * $scope.doorKeepCostGame / $scope.doorKeepAtFacility;

      $scope.doorKeepingCal = function () {
        
      };


      //Facility Admission Collector
      $scope.adminssionCollertorCostHr = LS.getData($scope.itemSelected.id + '-adminssionCollertorCostHr');
      $scope.adminssionCollertorsOnSite = LS.getData($scope.itemSelected.id + '-adminssionCollertorsOnSite');
      $scope.adminssionCollertorAtFacility = LS.getData($scope.itemSelected.id + '-adminssionCollertorAtFacility');
      $scope.adminssionCollertorCostMin = $scope.adminssionCollertorCostHr / 60 * $scope.adminssionCollertorsOnSite;
      $scope.adminssionCollertorCostGame = $scope.adminssionCollertorCostMin * $scope.gameLengthMin;
      $scope.adminssionCollertorCostRound = $scope.adminssionCollertorCostGame * $scope.gamesPRound / $scope.adminssionCollertorAtFacility;
      $scope.adminssionCollertorCostTotalSeason = $scope.totalGamesSeason * $scope.adminssionCollertorCostGame / $scope.adminssionCollertorAtFacility;

      $scope.admFacilityCal = function () {
        
      };

      //Last row


      //Maintenance
      $scope.paramedicCostHr = LS.getData($scope.itemSelected.id + '-paramedicCostHr');
      $scope.paramedicsOnSite = LS.getData($scope.itemSelected.id + '-paramedicsOnSite');
      $scope.paramedicAtFacility = LS.getData($scope.itemSelected.id + '-paramedicAtFacility');
      $scope.paramedicCostMin = $scope.paramedicCostHr / 60 * $scope.paramedicsOnSite;
      $scope.paramedicCostGame = $scope.paramedicCostMin * $scope.gameLengthMin;
      $scope.paramedicCostRound = $scope.paramedicCostGame * $scope.gamesPRound / $scope.paramedicAtFacility;
      $scope.paramedicCostTotalSeason = $scope.totalGamesSeason * $scope.paramedicCostGame / $scope.paramedicAtFacility;

      $scope.paramedicCal = function () {
        
      };


      //Prizes
      $scope.firstPlace = LS.getData($scope.itemSelected.id + '-firstPlace');
      $scope.secondPlace = LS.getData($scope.itemSelected.id + '-secondPlace');
      $scope.thirdPlace = LS.getData($scope.itemSelected.id + '-thirdPlace');
      $scope.fourthPlace = LS.getData($scope.itemSelected.id + '-fourthPlace');
      $scope.highestScorer = LS.getData($scope.itemSelected.id + '-highestScorer');
      $scope.bestGoalie = LS.getData($scope.itemSelected.id + '-bestGoalie');
      $scope.firstPlaceCoach = LS.getData($scope.itemSelected.id + '-firstPlaceCoach');
      $scope.trophies = LS.getData($scope.itemSelected.id + '-trophies');
      $scope.medals = LS.getData($scope.itemSelected.id + '-medals');
      $scope.mailingSingupPrize = LS.getData($scope.itemSelected.id + '-mailingSingupPrize');

      $scope.prizesTotalCostSeason = parseFloat($scope.firstPlace)
        + parseFloat($scope.secondPlace) + parseFloat($scope.thirdPlace)
        + parseFloat($scope.fourthPlace) + parseFloat($scope.highestScorer)
        + parseFloat($scope.bestGoalie) + parseFloat($scope.firstPlaceCoach)
        + parseFloat($scope.trophies) + parseFloat($scope.medals) + parseFloat($scope.mailingSingupPrize);


      //Values Total For All Rows
      $scope.totalCost = $scope.fieldsSoccerTotalCostSeason + $scope.timerkeeperLineMCostSeason
        + $scope.refereesCostTotalSeason + $scope.securityTotalCostSeason
        + $scope.doorKeepCostTotalSeason + $scope.adminssionCollertorCostTotalSeason
        + $scope.paramedicCostTotalSeason + $scope.prizesTotalCostSeason;

      $scope.totalIncome = $scope.divisionAFeeTotalInSeason + $scope.divisionIdCardsFeeIncomeSeason +
        $scope.divisionSanctionsTotalSeason + $scope.admissionFeeDivisionTotalSeason;

      $scope.totalBalance = $scope.totalIncome - $scope.totalCost;

      $scope.prizesCal = function () {
        
      };
/*******************ALL CALCULATE ************************************/
      $scope.allCalculate = function () {

        $scope.divisionMembers = $scope.divisionTeams * $scope.teamMembers;
        $scope.gamesPRound = $scope.divisionTeams / 2;
        LS.setData($scope.itemSelected.id + '-teamSAFee', $scope.teamSAFee);
        LS.setData($scope.itemSelected.id + '-divisionTeams', $scope.divisionTeams);
        LS.setData($scope.itemSelected.id + '-teamMembers', $scope.teamMembers);

        LS.setData($scope.itemSelected.id + '-divisionMembers', $scope.divisionMembers);

        //soccer teams

        $scope.totalGamesSeason = ($scope.seasonRRounds * $scope.gamesPRound) + parseInt($scope.seasonTPGames);
        $scope.divisionAFeeTotalInSeason = $scope.teamSAFee * $scope.divisionTeams;

        LS.setData($scope.itemSelected.id + '-seasonRRounds', $scope.seasonRRounds);
        LS.setData($scope.itemSelected.id + '-seasonPRounds', $scope.seasonPRounds);
        LS.setData($scope.itemSelected.id + '-seasonTPGames', $scope.seasonTPGames);
        LS.setData($scope.itemSelected.id + '-gameLengthMin', $scope.gameLengthMin);

        LS.setData($scope.itemSelected.id + '-gamesPRound', $scope.gamesPRound);
        LS.setData($scope.itemSelected.id + '-totalGamesSeason', $scope.totalGamesSeason);
        LS.setData($scope.itemSelected.id + '-divisionAFeeTotalInSeason', $scope.divisionAFeeTotalInSeason);


        //id cards
        $scope.idCardsDivisionMembers = $scope.divisionTeams * $scope.idCardsTeamMembers;
        $scope.idCardsAIncomeTeam = $scope.memberCardFee * $scope.idCardsTeamMembers;
        $scope.idCardsAIncomeTeamRepla = $scope.memberCardFeeRepla * $scope.idCardsTeamMembers / 10;
        $scope.idCardsIncomeDivison = $scope.idCardsDivisionMembers * $scope.memberCardFee;
        $scope.idCardsIncomeDivisonRepla = $scope.idCardsDivisionMembers / 10 * $scope.memberCardFeeRepla;
        $scope.divisionIdCardsFeeIncomeSeason = $scope.idCardsIncomeDivison
          + $scope.idCardsIncomeDivisonRepla;
        LS.setData($scope.itemSelected.id + '-memberCardFee', $scope.memberCardFee);
        LS.setData($scope.itemSelected.id + '-memberCardFeeRepla', $scope.memberCardFeeRepla);
        LS.setData($scope.itemSelected.id + '-idCardsTeamMembers', $scope.idCardsTeamMembers);

        LS.setData($scope.itemSelected.id + '-idCardsDivisionMembers', $scope.idCardsDivisionMembers);
        LS.setData($scope.itemSelected.id + '-idCardsAIncomeTeam', $scope.idCardsAIncomeTeam);
        LS.setData($scope.itemSelected.id + '-idCardsAIncomeTeamRepla', $scope.idCardsAIncomeTeamRepla);
        LS.setData($scope.itemSelected.id + '-idCardsIncomeDivison', $scope.idCardsIncomeDivison);
        LS.setData($scope.itemSelected.id + '-idCardsIncomeDivisonRepla', $scope.idCardsIncomeDivisonRepla);
        LS.setData($scope.itemSelected.id + '-divisionIdCardsFeeIncomeSeason', $scope.divisionIdCardsFeeIncomeSeason);


        //sanction cards

        $scope.cardsYellowTotalSeason = $scope.cardYellowRegular * 2 * $scope.totalGamesSeason;
        $scope.cardsYellowTotalSeasonAggre = $scope.cardYellowAggressive / 2 * $scope.totalGamesSeason;
        $scope.cardsRedTotalSeason = $scope.cardRedFine / 4 * $scope.totalGamesSeason;
        $scope.sanctionsTotalSeason = $scope.sanctionFine / 10 * $scope.divisionTeams;
        $scope.divisionSanctionsTotalSeason = $scope.cardsYellowTotalSeason
          + $scope.cardsYellowTotalSeasonAggre
          + $scope.cardsRedTotalSeason
          + $scope.sanctionsTotalSeason;
        LS.setData($scope.itemSelected.id + '-cardYellowRegular', $scope.cardYellowRegular);
        LS.setData($scope.itemSelected.id + '-cardYellowAggressive', $scope.cardYellowAggressive);
        LS.setData($scope.itemSelected.id + '-cardRedFine', $scope.cardRedFine);
        LS.setData($scope.itemSelected.id + '-sanctionFine', $scope.sanctionFine);

        LS.setData($scope.itemSelected.id + '-cardsYellowTotalSeason', $scope.cardsYellowTotalSeason);
        LS.setData($scope.itemSelected.id + '-cardsYellowTotalSeasonAggre', $scope.cardsYellowTotalSeasonAggre);
        LS.setData($scope.itemSelected.id + '-cardsRedTotalSeason', $scope.cardsRedTotalSeason);
        LS.setData($scope.itemSelected.id + '-sanctionsTotalSeason', $scope.sanctionsTotalSeason);
        LS.setData($scope.itemSelected.id + '-divisionSanctionsTotalSeason', $scope.divisionSanctionsTotalSeason);


        //facility adm

        $scope.assitanceDivisionMembersRound = $scope.assistanceTeamMembersRound * $scope.divisionTeams;
        $scope.feeTeamGameRound = $scope.admissionFacilityFee * $scope.assistanceTeamMembersRound;
        $scope.feeDivisionRound = $scope.admissionFacilityFee * $scope.assitanceDivisionMembersRound;
        $scope.admissionFeeDivisionTotalSeason = $scope.totalGamesSeason * 2 * $scope.admissionFacilityFee * $scope.assistanceTeamMembersRound;
        LS.setData($scope.itemSelected.id + '-admissionFacilityFee', $scope.admissionFacilityFee);
        LS.setData($scope.itemSelected.id + '-assistanceTeamMembersRound', $scope.assistanceTeamMembersRound);

        LS.setData($scope.itemSelected.id + '-admassitanceDivisionMembersRoundissionFacilityFee', $scope.assitanceDivisionMembersRound);
        LS.setData($scope.itemSelected.id + '-feeTeamGameRound', $scope.feeTeamGameRound);
        LS.setData($scope.itemSelected.id + '-feeDivisionRound', $scope.feeDivisionRound);
        LS.setData($scope.itemSelected.id + '-admissionFeeDivisionTotalSeason', $scope.admissionFeeDivisionTotalSeason);

        //fields so
        $scope.fieldCostMin = $scope.fieldCostHr / 60;
        $scope.fieldsCostGame = $scope.fieldCostMin * $scope.gameLengthMin;
        $scope.fieldsCostRound = $scope.fieldsCostGame * $scope.gamesPRound;
        $scope.roundLenthHrs = $scope.gameLengthMin * $scope.gamesPRound / 60;
        $scope.timeNeededHrsRound = $scope.roundLenthHrs / $scope.fieldsNumberFacility;

        $scope.fieldsSoccerTotalCostSeason = $scope.totalGamesSeason * $scope.fieldsCostGame;

        LS.setData($scope.itemSelected.id + '-fieldsNumberFacility', $scope.fieldsNumberFacility);
        LS.setData($scope.itemSelected.id + '-fieldCostHr', $scope.fieldCostHr);

        LS.setData($scope.itemSelected.id + '-fieldCostMin', $scope.fieldCostMin);
        LS.setData($scope.itemSelected.id + '-fieldsCostGame', $scope.fieldsCostGame);
        LS.setData($scope.itemSelected.id + '-fieldsCostRound', $scope.fieldsCostRound);
        LS.setData($scope.itemSelected.id + '-roundLenthHrs', $scope.roundLenthHrs);
        LS.setData($scope.itemSelected.id + '-timeNeededHrsRound', $scope.timeNeededHrsRound);

        LS.setData($scope.itemSelected.id + '-fieldsSoccerTotalCostSeason', $scope.fieldsSoccerTotalCostSeason);


        //timer keeper

        $scope.timerkeeperLineMCostMin = $scope.timerkeeperLineMCostHr / 60 * $scope.timerkeeperLineMGame;
        $scope.timerkeeperLineMCostGame = $scope.timerkeeperLineMCostMin * $scope.gameLengthMin;
        $scope.timerkeeperLineMCostRound = $scope.timerkeeperLineMCostGame * $scope.gamesPRound;
        $scope.timerkeeperLineMCostSeason = $scope.timerkeeperLineMCostGame * $scope.totalGamesSeason;

        LS.setData($scope.itemSelected.id + '-timerkeeperLineMCostHr', $scope.timerkeeperLineMCostHr);
        LS.setData($scope.itemSelected.id + '-timerkeeperLineMGame', $scope.timerkeeperLineMGame);

        LS.setData($scope.itemSelected.id + '-timerkeeperLineMCostMin', $scope.timerkeeperLineMCostMin);
        LS.setData($scope.itemSelected.id + '-timerkeeperLineMCostGame', $scope.timerkeeperLineMCostGame);
        LS.setData($scope.itemSelected.id + '-timerkeeperLineMCostRound', $scope.timerkeeperLineMCostRound);

        LS.setData($scope.itemSelected.id + '-timerkeeperLineMCostSeason', $scope.timerkeeperLineMCostSeason);


        //refeere

        $scope.refereeCostMin = $scope.refereeCostHr / 60 * $scope.refereesAtGame;
        $scope.refereeCostGame = $scope.refereeCostMin * $scope.gameLengthMin;
        $scope.refereesCostRound = $scope.refereeCostGame * $scope.gamesPRound;
        $scope.refereesCostTotalSeason = $scope.refereeCostGame * $scope.totalGamesSeason;

        LS.setData($scope.itemSelected.id + '-refereeCostHr', $scope.refereeCostHr);
        LS.setData($scope.itemSelected.id + '-refereesAtGame', $scope.refereesAtGame);

        LS.setData($scope.itemSelected.id + '-refereeCostMin', $scope.refereeCostMin);
        LS.setData($scope.itemSelected.id + '-refereeCostGame', $scope.refereeCostGame);
        LS.setData($scope.itemSelected.id + '-refereesCostRound', $scope.refereesCostRound);

        LS.setData($scope.itemSelected.id + '-refereesCostTotalSeason', $scope.refereesCostTotalSeason);

        //security guard
        $scope.securityCostMin = $scope.secutityCostHr / 60 * $scope.secutityOnSite;
        $scope.securityCostGame = $scope.securityCostMin * $scope.gameLengthMin;
        $scope.securityCostRound = $scope.securityCostGame * $scope.gamesPRound / $scope.securityNumFieldsFacility;
        $scope.securityTotalCostSeason = $scope.totalGamesSeason * $scope.securityCostGame / $scope.securityNumFieldsFacility;

        LS.setData($scope.itemSelected.id + '-secutityCostHr', $scope.secutityCostHr);
        LS.setData($scope.itemSelected.id + '-secutityOnSite', $scope.secutityOnSite);
        LS.setData($scope.itemSelected.id + '-securityNumFieldsFacility', $scope.securityNumFieldsFacility);

        LS.setData($scope.itemSelected.id + '-securityCostMin', $scope.securityCostMin);
        LS.setData($scope.itemSelected.id + '-securityCostGame', $scope.securityCostGame);
        LS.setData($scope.itemSelected.id + '-securityCostRound', $scope.securityCostRound);

        LS.setData($scope.itemSelected.id + '-securityTotalCostSeason', $scope.securityTotalCostSeason);
        
        //doorkeper

        $scope.doorKeepCostMin = $scope.doorKeepCostHr / 60 * $scope.doorKeepOnSite;
        $scope.doorKeepCostGame = $scope.doorKeepCostMin * $scope.gameLengthMin;
        $scope.doorKeepCostRound = $scope.doorKeepCostGame * $scope.gamesPRound / $scope.doorKeepAtFacility;

        $scope.doorKeepCostTotalSeason = $scope.totalGamesSeason * $scope.doorKeepCostGame / $scope.doorKeepAtFacility;

        LS.setData($scope.itemSelected.id + '-doorKeepCostHr', $scope.doorKeepCostHr);
        LS.setData($scope.itemSelected.id + '-doorKeepOnSite', $scope.doorKeepOnSite);
        LS.setData($scope.itemSelected.id + '-doorKeepAtFacility', $scope.doorKeepAtFacility);

        LS.setData($scope.itemSelected.id + '-doorKeepCostMin', $scope.doorKeepCostMin);
        LS.setData($scope.itemSelected.id + '-doorKeepCostGame', $scope.doorKeepCostGame);
        LS.setData($scope.itemSelected.id + '-doorKeepCostRound', $scope.doorKeepCostRound);

        LS.setData($scope.itemSelected.id + '-doorKeepCostTotalSeason', $scope.doorKeepCostTotalSeason);

        //Adm faci cal

        $scope.adminssionCollertorCostMin = $scope.adminssionCollertorCostHr / 60 * $scope.adminssionCollertorsOnSite;
        $scope.adminssionCollertorCostGame = $scope.adminssionCollertorCostMin * $scope.gameLengthMin;
        $scope.adminssionCollertorCostRound = $scope.adminssionCollertorCostGame * $scope.gamesPRound / $scope.adminssionCollertorAtFacility;

        $scope.adminssionCollertorCostTotalSeason = $scope.totalGamesSeason * $scope.adminssionCollertorCostGame / $scope.adminssionCollertorAtFacility;

        LS.setData($scope.itemSelected.id + '-adminssionCollertorCostHr', $scope.adminssionCollertorCostHr);
        LS.setData($scope.itemSelected.id + '-adminssionCollertorsOnSite', $scope.adminssionCollertorsOnSite);
        LS.setData($scope.itemSelected.id + '-adminssionCollertorAtFacility', $scope.adminssionCollertorAtFacility);

        LS.setData($scope.itemSelected.id + '-adminssionCollertorCostMin', $scope.adminssionCollertorCostMin);
        LS.setData($scope.itemSelected.id + '-adminssionCollertorCostGame', $scope.adminssionCollertorCostGame);
        LS.setData($scope.itemSelected.id + '-adminssionCollertorCostRound', $scope.adminssionCollertorCostRound);

        LS.setData($scope.itemSelected.id + '-adminssionCollertorCostTotalSeason', $scope.adminssionCollertorCostTotalSeason);

        //paramedical
        $scope.paramedicCostMin = $scope.paramedicCostHr / 60 * $scope.paramedicsOnSite;
        $scope.paramedicCostGame = $scope.paramedicCostMin * $scope.gameLengthMin;
        $scope.paramedicCostRound = $scope.paramedicCostGame * $scope.gamesPRound / $scope.paramedicAtFacility;
        $scope.paramedicCostTotalSeason = $scope.totalGamesSeason * $scope.paramedicCostGame / $scope.paramedicAtFacility;

        LS.setData($scope.itemSelected.id + '-paramedicCostHr', $scope.paramedicCostHr);
        LS.setData($scope.itemSelected.id + '-paramedicsOnSite', $scope.paramedicsOnSite);
        LS.setData($scope.itemSelected.id + '-paramedicAtFacility', $scope.paramedicAtFacility);

        LS.setData($scope.itemSelected.id + '-paramedicCostMin', $scope.paramedicCostMin);
        LS.setData($scope.itemSelected.id + '-paramedicCostGame', $scope.paramedicCostGame);
        LS.setData($scope.itemSelected.id + '-paramedicCostRound', $scope.paramedicCostRound);

        LS.setData($scope.itemSelected.id + '-paramedicCostTotalSeason', $scope.paramedicCostTotalSeason);
        
        //prizes
        $scope.prizesTotalCostSeason = parseFloat($scope.firstPlace)
        + parseFloat($scope.secondPlace) + parseFloat($scope.thirdPlace)
        + parseFloat($scope.fourthPlace) + parseFloat($scope.highestScorer)
        + parseFloat($scope.bestGoalie) + parseFloat($scope.firstPlaceCoach)
        + parseFloat($scope.trophies) + parseFloat($scope.medals) + parseFloat($scope.mailingSingupPrize);

      LS.setData($scope.itemSelected.id + '-firstPlace', $scope.firstPlace);
      LS.setData($scope.itemSelected.id + '-secondPlace', $scope.secondPlace);
      LS.setData($scope.itemSelected.id + '-thirdPlace', $scope.thirdPlace);
      LS.setData($scope.itemSelected.id + '-fourthPlace', $scope.fourthPlace);
      LS.setData($scope.itemSelected.id + '-highestScorer', $scope.highestScorer);
      LS.setData($scope.itemSelected.id + '-bestGoalie', $scope.bestGoalie);
      LS.setData($scope.itemSelected.id + '-firstPlaceCoach', $scope.firstPlaceCoach);
      LS.setData($scope.itemSelected.id + '-trophies', $scope.trophies);
      LS.setData($scope.itemSelected.id + '-medals', $scope.medals);
      LS.setData($scope.itemSelected.id + '-mailingSingupPrize', $scope.mailingSingupPrize);

      LS.setData($scope.itemSelected.id + '-prizesTotalCostSeason', $scope.prizesTotalCostSeason);


      //Values Total For All Rows
      $scope.totalCost = $scope.fieldsSoccerTotalCostSeason + $scope.timerkeeperLineMCostSeason
        + $scope.refereesCostTotalSeason + $scope.securityTotalCostSeason
        + $scope.doorKeepCostTotalSeason + $scope.adminssionCollertorCostTotalSeason
        + $scope.paramedicCostTotalSeason + $scope.prizesTotalCostSeason;

      $scope.totalIncome = $scope.divisionAFeeTotalInSeason + $scope.divisionIdCardsFeeIncomeSeason +
        $scope.divisionSanctionsTotalSeason + $scope.admissionFeeDivisionTotalSeason;

      $scope.totalBalance = $scope.totalIncome - $scope.totalCost;

      };


    } else if ($scope.itemSelected.id == "ALD") {

  //All variables
  $scope.teamSAFee = 0; $scope.divisionTeams = 0; $scope.teamMembers = 0; $scope.divisionMembers = 0; $scope.seasonRRounds = 0; $scope.seasonPRounds = 0; $scope.seasonTPGames = 0;
  $scope.gameLengthMin = 0; $scope.totalGamesSeason = 0; $scope.divisionAFeeTotalInSeason = 0; $scope.memberCardFee = 0; $scope.memberCardFeeRepla = 0; $scope.idCardsTeamMembers = 0;
  $scope.divisionIdCardsFeeIncomeSeason = 0; $scope.cardYellowRegular = 0; $scope.cardYellowAggressive = 0; $scope.cardRedFine = 0; $scope.sanctionFine = 0; $scope.divisionSanctionsTotalSeason = 0;
  $scope.admissionFacilityFee = 0; $scope.assistanceTeamMembersRound = 0; $scope.admissionFeeDivisionTotalSeason = 0; $scope.fieldsNumberFacility = 0; $scope.fieldCostHr = 0; $scope.fieldsSoccerTotalCostSeason = 0;
  $scope.timerkeeperLineMCostHr = 0; $scope.timerkeeperLineMGame = 0; $scope.timerkeeperLineMCostSeason = 0; $scope.refereeCostHr = 0; $scope.refereesAtGame = 0;
  $scope.refereesCostTotalSeason = 0; $scope.secutityCostHr = 0; $scope.secutityOnSite = 0; $scope.securityNumFieldsFacility = 0; $scope.securityTotalCostSeason = 0;
  $scope.doorKeepCostHr = 0; $scope.doorKeepOnSite = 0; $scope.doorKeepAtFacility = 0; $scope.doorKeepCostTotalSeason = 0; $scope.adminssionCollertorCostHr = 0;
  $scope.adminssionCollertorsOnSite = 0; $scope.adminssionCollertorAtFacility = 0; $scope.adminssionCollertorCostTotalSeason = 0; $scope.paramedicCostHr = 0;
  $scope.paramedicsOnSite = 0; $scope.paramedicAtFacility = 0; $scope.paramedicCostTotalSeason = 0; $scope.firstPlace = 0; $scope.secondPlace = 0;
  $scope.thirdPlace = 0; $scope.fourthPlace = 0; $scope.highestScorer = 0; $scope.bestGoalie = 0; $scope.firstPlaceCoach = 0;
  $scope.trophies = 0; $scope.medals = 0; $scope.mailingSingupPrize = 0; $scope.prizesTotalCostSeason = 0;

    //fields Soccer teams
    $scope.titleteamSAFee = 'Team Season	Average Admission Fee';
    $scope.titledivisionTeams = 'League Teams';
    $scope.titleteamMembers = 'League Members';
    $scope.titledivisionMembers = 'Division Members';
    $scope.titleseasonRRounds = 'Season Regular Rounds';
    $scope.titleseasonPRounds = 'Season Play Off Rounds';
    $scope.titleseasonTPGames = 'Season Total Play Off Games';
    $scope.titlegameLengthMin =  'Game Length in Min';
    $scope.titlegamesPRound =  'Games Per Rounds';
    $scope.titletotalGamesSeason =  'Total Games Per Season';

      angular.forEach($scope.categories, function (value, key) {
        if (value.id != "NA" && value.id != "ALD") {
        
          //Soccer Teams
          $scope.teamSAFee += parseFloat(LS.getData(value.id + '-teamSAFee')==null?0:LS.getData(value.id + '-teamSAFee'));
          $scope.divisionTeams += parseFloat(LS.getData(value.id + '-divisionTeams')==null?0:LS.getData(value.id + '-divisionTeams'));
          $scope.teamMembers += parseFloat(LS.getData(value.id + '-teamMembers')==null?0:LS.getData(value.id + '-teamMembers'));
          $scope.divisionMembers += parseFloat(LS.getData(value.id + '-divisionMembers')==null?0:LS.getData(value.id + '-divisionMembers'));
          $scope.seasonRRounds = parseFloat(LS.getData('MD' + '-seasonRRounds')==null?0:LS.getData('MD' + '-seasonRRounds'));

          $scope.seasonPRounds = parseFloat(LS.getData('MD' + '-seasonPRounds')==null?0:LS.getData('MD'+ '-seasonPRounds'));
          $scope.seasonTPGames += parseFloat(LS.getData(value.id + '-seasonTPGames')==null?0:LS.getData(value.id + '-seasonTPGames'));
          $scope.gameLengthMin += parseFloat(LS.getData(value.id + '-gameLengthMin')==null?0:LS.getData(value.id + '-gameLengthMin'));
          $scope.gamesPRound += parseFloat(LS.getData(value.id + '-gamesPRound')==null?0:LS.getData(value.id + '-gamesPRound'));
          $scope.totalGamesSeason += parseFloat(LS.getData(value.id + '-totalGamesSeason')==null?0:LS.getData(value.id + '-totalGamesSeason'));
          $scope.divisionAFeeTotalInSeason += parseFloat(LS.getData(value.id + '-divisionAFeeTotalInSeason')==null?0:LS.getData(value.id + '-divisionAFeeTotalInSeason'));

          //Id Cards
          $scope.memberCardFee = LS.getData('MD' + '-memberCardFee')==null?0:LS.getData('MD' + '-memberCardFee');
          $scope.memberCardFeeRepla = LS.getData('MD' + '-memberCardFeeRepla')==null?0:LS.getData('MD' + '-memberCardFeeRepla');
          $scope.idCardsTeamMembers += parseFloat(LS.getData(value.id + '-idCardsTeamMembers')==null?0:LS.getData(value.id + '-idCardsTeamMembers'));

          $scope.divisionIdCardsFeeIncomeSeason += parseFloat(LS.getData(value.id + '-divisionIdCardsFeeIncomeSeason')==null?0:LS.getData(value.id + '-divisionIdCardsFeeIncomeSeason'));

          //Sanction Cards
          $scope.cardYellowRegular = LS.getData('MD' + '-cardYellowRegular')==null?0:LS.getData('MD' + '-cardYellowRegular');
          $scope.cardYellowAggressive = LS.getData('MD' + '-cardYellowAggressive')==null?0:LS.getData('MD' + '-cardYellowAggressive');
          $scope.cardRedFine = LS.getData('MD' + '-cardRedFine')==null?0:LS.getData('MD' + '-cardRedFine');
          $scope.sanctionFine = LS.getData('MD' + '-sanctionFine')==null?0:LS.getData('MD' + '-sanctionFine');

          $scope.divisionSanctionsTotalSeason += parseFloat(LS.getData(value.id + '-divisionSanctionsTotalSeason')==null?0:LS.getData(value.id + '-divisionSanctionsTotalSeason'));

          //Facility Admission Fee
          $scope.admissionFacilityFee = LS.getData('MD' + '-admissionFacilityFee')==null?0:LS.getData('MD' + '-admissionFacilityFee');
          $scope.assistanceTeamMembersRound += parseFloat(LS.getData(value.id + '-assistanceTeamMembersRound')==null?0:LS.getData(value.id + '-assistanceTeamMembersRound'));

          $scope.admissionFeeDivisionTotalSeason += parseFloat(LS.getData(value.id + '-admissionFeeDivisionTotalSeason')==null?0:LS.getData(value.id + '-admissionFeeDivisionTotalSeason'));        

          //Soccer Fields
          $scope.fieldsNumberFacility = LS.getData('MD' + '-fieldsNumberFacility')==null?0:LS.getData('MD' + '-fieldsNumberFacility');
          $scope.fieldCostHr += parseFloat(LS.getData(value.id + '-fieldsNumberFacility')==null?0:LS.getData(value.id + '-fieldsNumberFacility'));

          $scope.fieldsSoccerTotalCostSeason += parseFloat(LS.getData(value.id + '-fieldsSoccerTotalCostSeason')==null?0:LS.getData(value.id + '-fieldsSoccerTotalCostSeason'));

          //Game Timekeeper / Line Man
          $scope.timerkeeperLineMCostHr += parseFloat(LS.getData(value.id + '-timerkeeperLineMCostHr')==null?0:LS.getData(value.id + '-timerkeeperLineMCostHr'));
          $scope.timerkeeperLineMGame += parseFloat(LS.getData(value.id + '-timerkeeperLineMGame')==null?0:LS.getData(value.id + '-timerkeeperLineMGame'));

          $scope.timerkeeperLineMCostSeason += parseFloat(LS.getData(value.id + '-timerkeeperLineMCostSeason')==null?0:LS.getData(value.id + '-timerkeeperLineMCostSeason'));

          //Referees
          $scope.refereeCostHr += parseFloat(LS.getData(value.id + '-refereeCostHr')==null?0:LS.getData(value.id + '-refereeCostHr'));
          $scope.refereesAtGame += parseFloat(LS.getData(value.id + '-refereesAtGame')==null?0:LS.getData(value.id + '-refereesAtGame'));

          $scope.refereesCostTotalSeason += parseFloat(LS.getData(value.id + '-refereesCostTotalSeason')==null?0:LS.getData(value.id + '-refereesCostTotalSeason'));

          //Security Guard
          $scope.secutityCostHr += parseFloat(LS.getData(value.id + '-secutityCostHr')==null?0:LS.getData(value.id + '-secutityCostHr'));
          $scope.secutityOnSite += parseFloat(LS.getData(value.id + '-secutityOnSite')==null?0:LS.getData(value.id + '-secutityOnSite'));
          $scope.securityNumFieldsFacility += parseFloat(LS.getData(value.id + '-securityNumFieldsFacility')==null?0:LS.getData(value.id + '-securityNumFieldsFacility'));


          $scope.securityTotalCostSeason += parseFloat(LS.getData(value.id + '-securityTotalCostSeason')==null?0:LS.getData(value.id + '-securityTotalCostSeason'));

          //Door Keeping
          $scope.doorKeepCostHr += parseFloat(LS.getData(value.id + '-doorKeepCostHr')==null?0:LS.getData(value.id + '-doorKeepCostHr'));
          $scope.doorKeepOnSite += parseFloat(LS.getData(value.id + '-doorKeepOnSite')==null?0:LS.getData(value.id + '-doorKeepOnSite'));
          $scope.doorKeepAtFacility += parseFloat(LS.getData(value.id + '-doorKeepAtFacility')==null?0:LS.getData(value.id + '-doorKeepAtFacility'));


          $scope.doorKeepCostTotalSeason += parseFloat(LS.getData(value.id + '-doorKeepCostTotalSeason')==null?0:LS.getData(value.id + '-doorKeepCostTotalSeason'));

          //Facility Admission Collector
          $scope.adminssionCollertorCostHr += parseFloat(LS.getData(value.id + '-adminssionCollertorCostHr')==null?0:LS.getData(value.id + '-adminssionCollertorCostHr'));
          $scope.adminssionCollertorsOnSite += parseFloat(LS.getData(value.id + '-adminssionCollertorsOnSite')==null?0:LS.getData(value.id + '-adminssionCollertorsOnSite'));
          $scope.adminssionCollertorAtFacility += parseFloat(LS.getData(value.id + '-adminssionCollertorAtFacility')==null?0:LS.getData(value.id + '-adminssionCollertorAtFacility'));

          $scope.adminssionCollertorCostTotalSeason += parseFloat(LS.getData(value.id + '-adminssionCollertorCostTotalSeason')==null?0:LS.getData(value.id + '-adminssionCollertorCostTotalSeason'));

          //Maintenance
          $scope.paramedicCostHr += parseFloat(LS.getData(value.id + '-paramedicCostHr')==null?0:LS.getData(value.id + '-paramedicCostHr'));
          $scope.paramedicsOnSite += parseFloat(LS.getData(value.id + '-paramedicsOnSite')==null?0:LS.getData(value.id + '-paramedicsOnSite'));
          $scope.paramedicAtFacility += parseFloat(LS.getData(value.id + '-paramedicAtFacility')==null?0:LS.getData(value.id + '-paramedicAtFacility'));

          $scope.paramedicCostTotalSeason += parseFloat(LS.getData(value.id + '-paramedicCostTotalSeason')==null?0:LS.getData(value.id + '-paramedicCostTotalSeason'));

          //Prizes
          $scope.firstPlace += parseFloat(LS.getData(value.id + '-firstPlace')==null?0:LS.getData(value.id + '-firstPlace'));
          $scope.secondPlace += parseFloat(LS.getData(value.id + '-secondPlace')==null?0:LS.getData(value.id + '-secondPlace'));
          $scope.thirdPlace += parseFloat(LS.getData(value.id + '-thirdPlace')==null?0:LS.getData(value.id + '-thirdPlace'));
          $scope.fourthPlace += parseFloat(LS.getData(value.id + '-fourthPlace')==null?0:LS.getData(value.id + '-fourthPlace'));
          $scope.highestScorer += parseFloat(LS.getData(value.id + '-highestScorer')==null?0:LS.getData(value.id + '-highestScorer'));
          $scope.bestGoalie += parseFloat(LS.getData(value.id + '-bestGoalie')==null?0:LS.getData(value.id + '-bestGoalie'));
          $scope.firstPlaceCoach += parseFloat(LS.getData(value.id + '-firstPlaceCoach')==null?0:LS.getData(value.id + '-firstPlaceCoach'));
          $scope.trophies += parseFloat(LS.getData(value.id + '-trophies')==null?0:LS.getData(value.id + '-trophies'));
          $scope.medals += parseFloat(LS.getData(value.id + '-medals')==null?0:LS.getData(value.id + '-medals'));
          $scope.mailingSingupPrize += parseFloat(LS.getData(value.id + '-mailingSingupPrize')==null?0:LS.getData(value.id + '-mailingSingupPrize'));

          $scope.prizesTotalCostSeason += parseFloat(LS.getData(value.id + '-prizesTotalCostSeason')==null?0:LS.getData(value.id + '-prizesTotalCostSeason'));
        }
      });


      //Soccer Teams
      $scope.teamSAFee = $scope.teamSAFee/$scope.divisionTeams

      //Id Cards
      $scope.idCardsDivisionMembers = $scope.idCardsTeamMembers * $scope.teamMembers / $scope.divisionTeams;
      $scope.idCardsAIncomeTeam = $scope.idCardsTeamMembers * $scope.teamMembers;

      $scope.idCardsAIncomeTeamRepla = $scope.memberCardFee * $scope.idCardsTeamMembers;
      $scope.idCardsIncomeDivison = $scope.memberCardFeeRepla / 10 * $scope.idCardsTeamMembers;

      $scope.idCardsIncomeDivisonRepla = $scope.memberCardFee * $scope.idCardsAIncomeTeam;
      $scope.idCardsIncomeClubRepla = $scope.memberCardFee / 10 * $scope.idCardsAIncomeTeam;

      //Sanction Cards

      $scope.cardsYellowTotalSeason = $scope.cardYellowRegular * 2 * $scope.totalGamesSeason;
      $scope.cardsYellowTotalSeasonAggre = $scope.cardYellowAggressive / 2 * $scope.totalGamesSeason;
      $scope.cardsRedTotalSeason = $scope.cardRedFine / 4 * $scope.totalGamesSeason;
      $scope.sanctionsTotalSeason = $scope.sanctionFine / 10 * $scope.divisionTeams;

      //Facility Admission Fee      
      $scope.assitanceDivisionMembersRound = $scope.teamMembers / $scope.divisionTeams * $scope.assistanceTeamMembersRound;
      $scope.feeTeamGameRound = $scope.teamMembers * $scope.assistanceTeamMembersRound;

      $scope.feeDivisionRound = $scope.admissionFacilityFee * $scope.assistanceTeamMembersRound;

      $scope.divionGameFeeInRound = $scope.admissionFacilityFee * $scope.assitanceDivisionMembersRound;
      $scope.soccerClubInRound = $scope.admissionFacilityFee * $scope.feeTeamGameRound;

      //Soccer Fields
      $scope.fieldCostMin = $scope.fieldCostHr / 60;
      $scope.fieldsCostGame = $scope.gameLengthMin * $scope.fieldCostMin;

      $scope.fieldsCostRound = $scope.fieldsCostGame * $scope.gamesPRound;
      $scope.roundLenthHrs = $scope.gameLengthMin * $scope.gamesPRound / 60;

      $scope.timeNeededHrsRound = $scope.roundLenthHrs / $scope.fieldsNumberFacility;

      //Game Timekeeper / Line Man
      $scope.timerkeeperLineMCostMin = $scope.timerkeeperLineMCostHr / 60 * $scope.timerkeeperLineMGame;
      $scope.timerkeeperLineMCostGame = $scope.timerkeeperLineMCostMin * $scope.gameLengthMin;

      $scope.timerkeeperLineMCostRound = $scope.timerkeeperLineMCostGame * $scope.gamesPRound;

      //Referees
      $scope.refereeCostMin = $scope.refereeCostHr / 60 * $scope.refereesAtGame;
      $scope.refereeCostGame = $scope.refereeCostMin * $scope.gameLengthMin;
      $scope.refereesCostRound = $scope.refereeCostGame * $scope.gamesPRound;

      //Security Guard
      $scope.securityCostMin = $scope.secutityCostHr / 60 * $scope.secutityOnSite;
      $scope.securityCostGame = $scope.securityCostMin * $scope.gameLengthMin;
      $scope.securityCostRound = $scope.securityCostGame * $scope.gamesPRound / $scope.securityNumFieldsFacility;

      //Door Keeping
      $scope.doorKeepCostMin = $scope.doorKeepCostHr / 60 * $scope.doorKeepOnSite;
      $scope.doorKeepCostGame = $scope.doorKeepCostMin * $scope.gameLengthMin;
      $scope.doorKeepCostRound = $scope.doorKeepCostGame * $scope.gamesPRound / $scope.doorKeepAtFacility;

      //Facility Admission Collector
      $scope.adminssionCollertorCostMin = $scope.adminssionCollertorCostHr / 60 * $scope.adminssionCollertorsOnSite;
      $scope.adminssionCollertorCostGame = $scope.adminssionCollertorCostMin * $scope.gameLengthMin;
      $scope.adminssionCollertorCostRound = $scope.adminssionCollertorCostGame * $scope.gamesPRound / $scope.adminssionCollertorAtFacility;

      //Maintenance
      $scope.paramedicCostMin = $scope.paramedicCostHr / 60 * $scope.paramedicsOnSite;
      $scope.paramedicCostGame = $scope.paramedicCostMin * $scope.gameLengthMin;
      $scope.paramedicCostRound = $scope.paramedicCostGame * $scope.gamesPRound / $scope.paramedicAtFacility;

      //Totals
      $scope.totalCost = $scope.fieldsSoccerTotalCostSeason + $scope.timerkeeperLineMCostSeason
        + $scope.refereesCostTotalSeason + $scope.securityTotalCostSeason
        + $scope.doorKeepCostTotalSeason + $scope.adminssionCollertorCostTotalSeason
        + $scope.paramedicCostTotalSeason + $scope.prizesTotalCostSeason;
        
      $scope.totalIncome = $scope.divisionAFeeTotalInSeason + $scope.divisionIdCardsFeeIncomeSeason +
        $scope.divisionSanctionsTotalSeason + $scope.admissionFeeDivisionTotalSeason;

      $scope.totalBalance = $scope.totalIncome - $scope.totalCost;

    };

  };

};

