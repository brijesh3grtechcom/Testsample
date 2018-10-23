/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Start_Srceen',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'page_first',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"1_page.png",'0px','0px']
                },
                {
                    id: 'more_game2',
                    display: 'block',
                    type: 'rect',
                    rect: ['81.6%', '78.4%','auto','auto','auto', 'auto']
                },
                {
                    id: 'play_sym',
                    type: 'rect',
                    rect: ['45.7%', '56.7%','auto','auto','auto', 'auto']
                }]
            },
            {
                id: 'Board_Screen',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'board1',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"dro_boat.png",'0px','0px']
                },
                {
                    id: 'img_sym',
                    type: 'rect',
                    rect: ['12.6%', '24.7%','auto','auto','auto', 'auto']
                },
                {
                    id: 'img_sym2',
                    display: 'none',
                    type: 'rect',
                    rect: ['21.2%', '25.4%','auto','auto','auto', 'auto']
                },
                {
                    id: 'next1',
                    type: 'image',
                    rect: ['37.4%', '77.8%','6.3%','10.2%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px'],
                    transform: [[],['270'],[],['-1.06667']]
                },
                {
                    id: 'next2',
                    type: 'image',
                    rect: ['47.2%', '74.1%','12.3%','16.9%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px'],
                    transform: [[],['90'],[],['0.54128','0.59184']]
                }]
            },
            {
                id: 'Color_Screen_1',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'last_screen1',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"end.png",'0px','0px']
                },
                {
                    id: 'Screen_1',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"2_page.png",'0px','0px']
                },
                {
                    id: 'Group1',
                    type: 'group',
                    rect: ['20.1%', '16.6%','38%','65.9%','auto', 'auto'],
                    c: [
                    {
                        id: '_1_outline2',
                        type: 'image',
                        rect: ['0%', '0%','99.7%','100%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/1_outline.png",'0px','0px']
                    },
                    {
                        id: '_1_2',
                        type: 'image',
                        rect: ['27.2%', '0.6%','72.1%','65.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/2/1_2.png",'0px','0px']
                    },
                    {
                        id: '_1_22',
                        type: 'image',
                        rect: ['43.4%', '49.7%','30%','33.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/22/1_22.png",'0px','0px']
                    },
                    {
                        id: '_1_3',
                        type: 'image',
                        rect: ['0.3%', '0.4%','84.8%','58.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/3/1_3.png",'0px','0px']
                    },
                    {
                        id: '_1_10',
                        type: 'image',
                        rect: ['25.8%', '9.2%','58.4%','40.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/10/1_10.png",'0px','0px']
                    },
                    {
                        id: '_1_14',
                        type: 'image',
                        rect: ['40.9%', '23.4%','46.7%','22.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/14/1_14.png",'0px','0px']
                    },
                    {
                        id: '_1_15',
                        type: 'image',
                        rect: ['46.7%', '18.6%','30.9%','35.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/15/1_15.png",'0px','0px']
                    },
                    {
                        id: '_1_1',
                        type: 'image',
                        rect: ['0.3%', '0.2%','43.9%','41.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/1/1_1.png",'0px','0px']
                    },
                    {
                        id: '_1_16',
                        type: 'image',
                        rect: ['50.4%', '24.9%','24.7%','10.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/16/1_16.png",'0px','0px']
                    },
                    {
                        id: '_1_7',
                        type: 'image',
                        rect: ['0.3%', '46.2%','35.9%','25.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/7/1_7.png",'0px','0px']
                    },
                    {
                        id: '_1_9',
                        type: 'image',
                        rect: ['56.6%', '7.3%','16.4%','13.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/9/1_9.png",'0px','0px']
                    },
                    {
                        id: '_1_4',
                        type: 'image',
                        rect: ['77.8%', '10%','21.6%','63.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/4/1_4.png",'0px','0px']
                    },
                    {
                        id: '_1_5',
                        type: 'image',
                        rect: ['0.3%', '64%','99%','36%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/5/1_5.png",'0px','0px']
                    },
                    {
                        id: '_1_23',
                        type: 'image',
                        rect: ['39.5%', '78.9%','41.8%','19.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/23/1_23.png",'0px','0px']
                    },
                    {
                        id: '_1_8',
                        type: 'image',
                        rect: ['78.4%', '73.3%','20.9%','15%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/8/1_8.png",'0px','0px']
                    },
                    {
                        id: '_1_17',
                        type: 'image',
                        rect: ['61.7%', '30.3%','9.6%','22.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/17/1_17.png",'0px','0px']
                    },
                    {
                        id: '_1_24',
                        type: 'image',
                        rect: ['40.4%', '86%','33.4%','10.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/24/1_24.png",'0px','0px']
                    },
                    {
                        id: '_1_21',
                        type: 'image',
                        rect: ['49.6%', '49.8%','11.2%','9.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/21/1_21.png",'0px','0px']
                    },
                    {
                        id: '_1_25',
                        type: 'image',
                        rect: ['39.1%', '94.3%','42.7%','4.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/25/1_25.png",'0px','0px']
                    },
                    {
                        id: '_1_19',
                        type: 'image',
                        rect: ['51.2%', '42.6%','5.6%','8.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/19/1_19.png",'0px','0px']
                    },
                    {
                        id: '_1_18',
                        type: 'image',
                        rect: ['58.5%', '44.3%','14.6%','9.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/18/1_18.png",'0px','0px']
                    },
                    {
                        id: '_1_6',
                        type: 'image',
                        rect: ['0.3%', '60.6%','33.4%','20.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/6/1_6.png",'0px','0px']
                    },
                    {
                        id: '_1_11',
                        type: 'image',
                        rect: ['59.5%', '17.4%','3.1%','0.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/11/1_11.png",'0px','0px']
                    },
                    {
                        id: '_1_13',
                        type: 'image',
                        rect: ['59.6%', '10.4%','7.2%','3.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/13/1_13.png",'0px','0px']
                    },
                    {
                        id: '_1_12',
                        type: 'image',
                        rect: ['60.5%', '13.1%','5.8%','1.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/12/1_12.png",'0px','0px']
                    },
                    {
                        id: '_1_20',
                        type: 'image',
                        rect: ['53.9%', '50.8%','1.5%','0.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/1/20/1_20.png",'0px','0px']
                    }]
                },
                {
                    id: 'Rectangle2',
                    type: 'rect',
                    rect: ['-11.3%', '44.5%','35%','15%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(244,229,90,1.00)"],
                    stroke: [0,"rgb(42, 19, 190)","none"],
                    transform: [[],['-90']]
                },
                {
                    id: 'Rectangle22',
                    type: 'rect',
                    rect: ['-10.7%', '44.1%','34%','15%','auto', 'auto'],
                    fill: ["rgba(241,22,118,0.00)"],
                    stroke: [0,"rgb(42, 19, 190)","none"],
                    transform: [[],['-90']],
                    c: [
                    {
                        id: 'Ani_1',
                        type: 'rect',
                        rect: ['4%', '-24.6%','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'next_icon1',
                    type: 'image',
                    rect: ['4%', '85%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px'],
                    transform: [[],['180']]
                },
                {
                    id: 'next_icon2',
                    type: 'image',
                    rect: ['4%', '13.3%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px']
                },
                {
                    id: 'show1',
                    type: 'image',
                    rect: ['61%', '85.2%','10.4%','15.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/display.png",'0px','0px']
                }]
            },
            {
                id: 'Color_Screen_2',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'last_screen2',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"end.png",'0px','0px']
                },
                {
                    id: 'Screen_2',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"2_page.png",'0px','0px']
                },
                {
                    id: 'Group2',
                    type: 'group',
                    rect: ['20.5%', '12.8%','40.5%','76.5%','auto', 'auto'],
                    c: [
                    {
                        id: '_2_outline',
                        type: 'image',
                        rect: ['0.1%', '-0.1%','100%','100.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/2_outline.png",'0px','0px']
                    },
                    {
                        id: '_2_1',
                        type: 'image',
                        rect: ['2.6%', '72.5%','88.1%','26.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/1/2_1.png",'0px','0px']
                    },
                    {
                        id: '_2_10',
                        type: 'image',
                        rect: ['79.1%', '18.1%','20.2%','23%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/10/2_10.png",'0px','0px']
                    },
                    {
                        id: '_2_11',
                        type: 'image',
                        rect: ['38.8%', '0.6%','10.8%','22.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/11/2_11.png",'0px','0px']
                    },
                    {
                        id: '_2_12',
                        type: 'image',
                        rect: ['0.2%', '7%','15.7%','24.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/12/2_12.png",'0px','0px']
                    },
                    {
                        id: '_2_13',
                        type: 'image',
                        rect: ['26.5%', '31.8%','38.9%','49.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/13/2_13.png",'0px','0px']
                    },
                    {
                        id: '_2_14',
                        type: 'image',
                        rect: ['17.1%', '74.8%','59.4%','9.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/14/2_14.png",'0px','0px']
                    },
                    {
                        id: '_2_15',
                        type: 'image',
                        rect: ['24.4%', '43.1%','38.1%','34.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/15/2_15.png",'0px','0px']
                    },
                    {
                        id: '_2_16',
                        type: 'image',
                        rect: ['35.5%', '22.7%','36%','27.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/16/2_16.png",'0px','0px']
                    },
                    {
                        id: '_2_2',
                        type: 'image',
                        rect: ['59.5%', '49.8%','27%','34.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/2/2_2.png",'0px','0px']
                    },
                    {
                        id: '_2_3',
                        type: 'image',
                        rect: ['36%', '28.3%','8.9%','56.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/3/2_3.png",'0px','0px']
                    },
                    {
                        id: '_2_4',
                        type: 'image',
                        rect: ['12%', '37.5%','17.1%','45.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/4/2_4.png",'0px','0px']
                    },
                    {
                        id: '_2_6',
                        type: 'image',
                        rect: ['72.3%', '35.6%','22.3%','18.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/6/2_6.png",'0px','0px']
                    },
                    {
                        id: '_2_7',
                        type: 'image',
                        rect: ['9.6%', '31.3%','7.2%','4.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/7/2_7.png",'0px','0px']
                    },
                    {
                        id: '_2_8',
                        type: 'image',
                        rect: ['10.4%', '35.1%','7.2%','2.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/8/2_8.png",'0px','0px']
                    },
                    {
                        id: '_2_9',
                        type: 'image',
                        rect: ['40.2%', '22.7%','4.4%','6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/9/2_9.png",'0px','0px']
                    },
                    {
                        id: '_2_5',
                        type: 'image',
                        rect: ['74%', '38.6%','17.9%','12.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/5/2_5.png",'0px','0px']
                    },
                    {
                        id: '_2_19',
                        type: 'image',
                        rect: ['52.2%', '31.8%','15.8%','6.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/19/2_19.png",'0px','0px']
                    },
                    {
                        id: '_2_17',
                        type: 'image',
                        rect: ['53.9%', '26%','8%','4.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/17/2_17.png",'0px','0px']
                    },
                    {
                        id: '_2_20',
                        type: 'image',
                        rect: ['54.8%', '32.6%','6.9%','4.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/20/2_20.png",'0px','0px']
                    },
                    {
                        id: '_2_18',
                        type: 'image',
                        rect: ['54.8%', '26.7%','4.4%','3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/2/18/2_18.png",'0px','0px']
                    }]
                },
                {
                    id: 'Rectangle',
                    type: 'rect',
                    rect: ['-11.3%', '44.2%','35%','15%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(241,241,22,1.00)"],
                    stroke: [0,"rgb(42, 19, 190)","none"],
                    transform: [[],['-90']]
                },
                {
                    id: 'Rectangle1',
                    type: 'rect',
                    rect: ['-10.2%', '45.8%','34%','14.5%','auto', 'auto'],
                    fill: ["rgba(241,22,118,0.00)"],
                    stroke: [0,"rgba(42,19,190,1.00)","none"],
                    transform: [[],['-90']],
                    c: [
                    {
                        id: 'sym_1',
                        type: 'rect',
                        rect: ['12.1%', '113.8%','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'show2',
                    type: 'image',
                    rect: ['61.2%', '84.2%','10.4%','15.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/display.png",'0px','0px']
                },
                {
                    id: 'next_icon3',
                    type: 'image',
                    rect: ['2.9%', '83.9%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px'],
                    transform: [[],['180']]
                },
                {
                    id: 'next_icon4',
                    type: 'image',
                    rect: ['4.2%', '12.8%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px']
                }]
            },
            {
                id: 'Color_Screen_3',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'last_screen3',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"end.png",'0px','0px']
                },
                {
                    id: 'Screen_3',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"2_page.png",'0px','0px']
                },
                {
                    id: 'Group3',
                    type: 'group',
                    rect: ['17.3%', '14.7%','43.4%','71.8%','auto', 'auto'],
                    c: [
                    {
                        id: '_3_outline',
                        type: 'image',
                        rect: ['0%', '0%','100%','100.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/3_outline.png",'0px','0px']
                    },
                    {
                        id: '_3_10',
                        type: 'image',
                        rect: ['21.3%', '3.9%','63.1%','30.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/10/3_10.png",'0px','0px']
                    },
                    {
                        id: '_3_12',
                        type: 'image',
                        rect: ['0.8%', '52.9%','98.8%','46.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/12/3_12.png",'0px','0px']
                    },
                    {
                        id: '_3_13',
                        type: 'image',
                        rect: ['3%', '59.2%','95.1%','40.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/13/3_13.png",'0px','0px']
                    },
                    {
                        id: '_3_11',
                        type: 'image',
                        rect: ['71.4%', '14.9%','17.3%','84.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/11/3_11.png",'0px','0px']
                    },
                    {
                        id: '_3_14',
                        type: 'image',
                        rect: ['0.8%', '23.2%','71.7%','66.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/14/3_14.png",'0px','0px']
                    },
                    {
                        id: '_3_15',
                        type: 'image',
                        rect: ['3.9%', '40.5%','45.5%','47.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/15/3_15.png",'0px','0px']
                    },
                    {
                        id: '_3_16',
                        type: 'image',
                        rect: ['8.5%', '54.2%','31.8%','30%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/16/3_16.png",'0px','0px']
                    },
                    {
                        id: '_3_17',
                        type: 'image',
                        rect: ['47.2%', '26.8%','39.3%','46.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/17/3_17.png",'0px','0px']
                    },
                    {
                        id: '_3_18',
                        type: 'image',
                        rect: ['56%', '31.7%','15.4%','6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/18/3_18.png",'0px','0px']
                    },
                    {
                        id: '_3_19',
                        type: 'image',
                        rect: ['57.8%', '31.9%','13.6%','5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/19/3_19.png",'0px','0px']
                    },
                    {
                        id: '_3_2',
                        type: 'image',
                        rect: ['38.6%', '1.1%','3.5%','3.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/2/3_2.png",'0px','0px']
                    },
                    {
                        id: '_3_20',
                        type: 'image',
                        rect: ['58.1%', '29%','13.3%','3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/20/3_20.png",'0px','0px']
                    },
                    {
                        id: '_3_22',
                        type: 'image',
                        rect: ['43.4%', '39.5%','5.5%','2.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/22/3_22.png",'0px','0px']
                    },
                    {
                        id: '_3_24',
                        type: 'image',
                        rect: ['59.4%', '41%','7.2%','3.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/24/3_24.png",'0px','0px']
                    },
                    {
                        id: '_3_21',
                        type: 'image',
                        rect: ['61.6%', '41.4%','4.3%','2.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/21/3_21.png",'0px','0px'],
                        transform: [[],['4']]
                    },
                    {
                        id: '_3_23',
                        type: 'image',
                        rect: ['60.2%', '41.4%','3.4%','1.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/23/3_23.png",'0px','0px']
                    },
                    {
                        id: '_3_25',
                        type: 'image',
                        rect: ['42.4%', '47.7%','44.9%','27.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/25/3_25.png",'0px','0px']
                    },
                    {
                        id: '_3_28',
                        type: 'image',
                        rect: ['40.8%', '55.3%','50%','17.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/28/3_28.png",'0px','0px']
                    },
                    {
                        id: '_3_27',
                        type: 'image',
                        rect: ['40%', '48.2%','32.1%','10.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/27/3_27.png",'0px','0px']
                    },
                    {
                        id: '_3_26',
                        type: 'image',
                        rect: ['39.5%', '48.2%','31.4%','11.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/26/3_26.png",'0px','0px']
                    },
                    {
                        id: '_3_29',
                        type: 'image',
                        rect: ['40%', '56.7%','8.4%','4.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/29/3_29.png",'0px','0px']
                    },
                    {
                        id: '_3_3',
                        type: 'image',
                        rect: ['54.4%', '3.9%','14.4%','13.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/3/3_3.png",'0px','0px']
                    },
                    {
                        id: '_3_30',
                        type: 'image',
                        rect: ['44.9%', '54.7%','16.7%','19.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/30/3_30.png",'0px','0px']
                    },
                    {
                        id: '_3_5',
                        type: 'image',
                        rect: ['42.9%', '5.9%','7.7%','6.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/5/3_5.png",'0px','0px']
                    },
                    {
                        id: '_3_4',
                        type: 'image',
                        rect: ['78.9%', '0.1%','9.3%','8.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/4/3_4.png",'0px','0px']
                    },
                    {
                        id: '_3_7',
                        type: 'image',
                        rect: ['41.7%', '18.5%','5.9%','5.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/7/3_7.png",'0px','0px']
                    },
                    {
                        id: '_3_8',
                        type: 'image',
                        rect: ['11.2%', '1.8%','24.5%','21.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/8/3_8.png",'0px','0px']
                    },
                    {
                        id: '_3_6',
                        type: 'image',
                        rect: ['33.9%', '8%','2.7%','2.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/6/3_6.png",'0px','0px']
                    },
                    {
                        id: '_3_9',
                        type: 'image',
                        rect: ['26.3%', '26.7%','9.4%','9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/9/3_9.png",'0px','0px']
                    },
                    {
                        id: '_3_31',
                        type: 'image',
                        rect: ['56%', '61.6%','4.4%','3.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/31/3_31.png",'0px','0px']
                    },
                    {
                        id: '_3_32',
                        type: 'image',
                        rect: ['25.9%', '70.4%','17.4%','11.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/32/3_32.png",'0px','0px']
                    },
                    {
                        id: '_3_1',
                        type: 'image',
                        rect: ['48.3%', '0.1%','1.3%','1.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/3/1/3_1.png",'0px','0px'],
                        transform: [[],[],['10']]
                    }]
                },
                {
                    id: 'Rectangle3',
                    type: 'rect',
                    rect: ['-11.2%', '44.5%','35%','15%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    opacity: 0.99,
                    fill: ["rgba(244,237,26,1.00)"],
                    stroke: [0,"rgb(42, 19, 190)","none"],
                    transform: [[],['-90']],
                    c: [
                    {
                        id: 'Ani_3',
                        type: 'rect',
                        rect: ['4.9%', '-99.5%','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'show3',
                    type: 'image',
                    rect: ['61.3%', '84.4%','10.4%','15.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/display.png",'0px','0px']
                },
                {
                    id: 'next_icon5',
                    type: 'image',
                    rect: ['4%', '85%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px'],
                    transform: [[],['180']]
                },
                {
                    id: 'next_icon6',
                    type: 'image',
                    rect: ['4%', '13%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px']
                }]
            },
            {
                id: 'Color_Screen_4',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'last_screen4',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"end.png",'0px','0px']
                },
                {
                    id: 'Screen_4',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"2_page.png",'0px','0px']
                },
                {
                    id: 'Group4',
                    type: 'group',
                    rect: ['15.3%', '13.4%','51.5%','70%','auto', 'auto'],
                    c: [
                    {
                        id: '_4_outline',
                        type: 'image',
                        rect: ['0.1%', '1.9%','98.7%','98.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/4_outline.png",'0px','0px']
                    },
                    {
                        id: '_4_1',
                        type: 'image',
                        rect: ['8.9%', '15.1%','30.6%','84.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/1/4_1.png",'0px','0px']
                    },
                    {
                        id: '_4_21',
                        type: 'image',
                        rect: ['29.1%', '0%','69.3%','85.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/21/4_21.png",'0px','0px']
                    },
                    {
                        id: '_4_34',
                        type: 'image',
                        rect: ['0.2%', '64.5%','98.5%','35.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/34/4_34.png",'0px','0px']
                    },
                    {
                        id: '_4_16',
                        type: 'image',
                        rect: ['24.2%', '49.5%','19.2%','26.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/16/4_16.png",'0px','0px']
                    },
                    {
                        id: '_4_3',
                        type: 'image',
                        rect: ['21.1%', '42%','30.2%','35.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/3/4_3.png",'0px','0px']
                    },
                    {
                        id: '_4_17',
                        type: 'image',
                        rect: ['40%', '52.2%','3.9%','20.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/17/4_17.png",'0px','0px']
                    },
                    {
                        id: '_4_18',
                        type: 'image',
                        rect: ['40%', '60.2%','4.2%','11.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/18/4_18.png",'0px','0px']
                    },
                    {
                        id: '_4_19',
                        type: 'image',
                        rect: ['13.3%', '71.4%','36.4%','28.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/19/4_19.png",'0px','0px']
                    },
                    {
                        id: '_4_20',
                        type: 'image',
                        rect: ['36.2%', '0.6%','63.9%','45.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/20/4_20.png",'0px','0px']
                    },
                    {
                        id: '_4_2',
                        type: 'image',
                        rect: ['25.3%', '18.7%','43.7%','35.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/2/4_2.png",'0px','0px']
                    },
                    {
                        id: '_4_13',
                        type: 'image',
                        rect: ['34.6%', '26.5%','2.8%','2.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/13/4_13.png",'0px','0px']
                    },
                    {
                        id: '_4_25',
                        type: 'image',
                        rect: ['45.1%', '4.3%','25.8%','34%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/25/4_25.png",'0px','0px']
                    },
                    {
                        id: '_4_22',
                        type: 'image',
                        rect: ['48.4%', '16.4%','4.2%','5.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/22/4_22.png",'0px','0px']
                    },
                    {
                        id: '_4_23',
                        type: 'image',
                        rect: ['48.4%', '19.7%','1.8%','1.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/23/4_23.png",'0px','0px']
                    },
                    {
                        id: '_4_24',
                        type: 'image',
                        rect: ['55.9%', '41.7%','5.4%','3.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/24/4_24.png",'0px','0px']
                    },
                    {
                        id: '_4_26',
                        type: 'image',
                        rect: ['57.7%', '13.7%','8.2%','16.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/26/4_26.png",'0px','0px']
                    },
                    {
                        id: '_4_27',
                        type: 'image',
                        rect: ['35.6%', '8.4%','10.8%','0.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/27/4_27.png",'0px','0px']
                    },
                    {
                        id: '_4_29',
                        type: 'image',
                        rect: ['48.9%', '54.9%','22.1%','37.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/29/4_29.png",'0px','0px']
                    },
                    {
                        id: '_4_28',
                        type: 'image',
                        rect: ['50.5%', '44.7%','21.4%','19%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/28/4_28.png",'0px','0px']
                    },
                    {
                        id: '_4_30',
                        type: 'image',
                        rect: ['54.7%', '72.2%','8.7%','11.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/30/4_30.png",'0px','0px']
                    },
                    {
                        id: '_4_31',
                        type: 'image',
                        rect: ['59.7%', '71.4%','7.6%','14.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/31/4_31.png",'0px','0px']
                    },
                    {
                        id: '_4_32',
                        type: 'image',
                        rect: ['60.5%', '75.5%','3.4%','8.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/32/4_32.png",'0px','0px']
                    },
                    {
                        id: '_4_33',
                        type: 'image',
                        rect: ['49.7%', '79.1%','21%','12.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/33/4_33.png",'0px','0px']
                    },
                    {
                        id: '_4_35',
                        type: 'image',
                        rect: ['74%', '61.8%','14.4%','13.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/35/4_35.png",'0px','0px']
                    },
                    {
                        id: '_4_36',
                        type: 'image',
                        rect: ['66.6%', '61%','8.6%','7.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/36/4_36.png",'0px','0px']
                    },
                    {
                        id: '_4_37',
                        type: 'image',
                        rect: ['48.4%', '64.3%','8.4%','9.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/37/4_37.png",'0px','0px']
                    },
                    {
                        id: '_4_38',
                        type: 'image',
                        rect: ['42.1%', '71.1%','7.2%','6.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/38/4_38.png",'0px','0px']
                    },
                    {
                        id: '_4_4',
                        type: 'image',
                        rect: ['20.8%', '43.1%','23.1%','14.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/4/4_4.png",'0px','0px']
                    },
                    {
                        id: '_4_5',
                        type: 'image',
                        rect: ['21.1%', '43.1%','23.9%','14.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/5/4_5.png",'0px','0px']
                    },
                    {
                        id: '_4_6',
                        type: 'image',
                        rect: ['27%', '46.6%','19.4%','11.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/6/4_6.png",'0px','0px']
                    },
                    {
                        id: '_4_7',
                        type: 'image',
                        rect: ['28.3%', '46.6%','17.3%','11%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/7/4_7.png",'0px','0px']
                    },
                    {
                        id: '_4_8',
                        type: 'image',
                        rect: ['31.3%', '45.8%','19.3%','14.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/8/4_8.png",'0px','0px']
                    },
                    {
                        id: '_4_9',
                        type: 'image',
                        rect: ['61.9%', '27.8%','4.6%','4.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/9/4_9.png",'0px','0px']
                    },
                    {
                        id: '_4_15',
                        type: 'image',
                        rect: ['47.1%', '53.9%','2.5%','2.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/15/4_15.png",'0px','0px']
                    },
                    {
                        id: '_4_10',
                        type: 'image',
                        rect: ['39.7%', '33.2%','2.8%','3.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/10/4_10.png",'0px','0px']
                    },
                    {
                        id: '_4_11',
                        type: 'image',
                        rect: ['40.6%', '34.5%','1.1%','0.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/11/4_11.png",'0px','0px']
                    },
                    {
                        id: '_4_12',
                        type: 'image',
                        rect: ['34.8%', '23.1%','2.8%','1.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/12/4_12.png",'0px','0px']
                    },
                    {
                        id: '_4_14',
                        type: 'image',
                        rect: ['36%', '26.3%','0.9%','1.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/4/14/4_14.png",'0px','0px']
                    }]
                },
                {
                    id: 'Rectangle4',
                    type: 'rect',
                    rect: ['-11.1%', '44.5%','35%','15%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(241,241,22,1.00)"],
                    stroke: [0,"rgb(42, 19, 190)","none"],
                    transform: [[],['-90']],
                    c: [
                    {
                        id: 'Ani_4',
                        type: 'rect',
                        rect: ['-1.9%', '-48.7%','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'show4',
                    type: 'image',
                    rect: ['60.8%', '84.5%','10.4%','15.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/display.png",'0px','0px']
                },
                {
                    id: 'next_icon7',
                    type: 'image',
                    rect: ['4%', '85%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px'],
                    transform: [[],['180']]
                },
                {
                    id: 'next_icon8',
                    type: 'image',
                    rect: ['4%', '13.4%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px']
                }]
            },
            {
                id: 'Color_Screen_5',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'last_screen5',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"end.png",'0px','0px']
                },
                {
                    id: 'Screen_5',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"2_page.png",'0px','0px']
                },
                {
                    id: 'Group5',
                    type: 'group',
                    rect: ['16.7%', '15.8%','46.2%','72.7%','auto', 'auto'],
                    c: [
                    {
                        id: '_5_outline',
                        type: 'image',
                        rect: ['4%', '0%','92.1%','100%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/5_outline.png",'0px','0px']
                    },
                    {
                        id: '_5_14',
                        type: 'image',
                        rect: ['1.5%', '58.6%','97.5%','27.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/14/5_14.png",'0px','0px']
                    },
                    {
                        id: '_5_13',
                        type: 'image',
                        rect: ['0.7%', '49.7%','99.3%','18.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/13/5_13.png",'0px','0px']
                    },
                    {
                        id: '_5_15',
                        type: 'image',
                        rect: ['0.1%', '67%','99.1%','21.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/15/5_15.png",'0px','0px']
                    },
                    {
                        id: '_5_16',
                        type: 'image',
                        rect: ['4.3%', '81.9%','91.7%','15.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/16/5_16.png",'0px','0px'],
                        transform: [[],[],['0','-4']]
                    },
                    {
                        id: '_5_17',
                        type: 'image',
                        rect: ['4.4%', '85.9%','91.4%','9.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/17/5_17.png",'0px','0px']
                    },
                    {
                        id: '_5_37',
                        type: 'image',
                        rect: ['33.9%', '0.2%','61.8%','53.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/37/5_37.png",'0px','0px']
                    },
                    {
                        id: '_5_20',
                        type: 'image',
                        rect: ['27%', '29.8%','26.2%','37.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/20/5_20.png",'0px','0px']
                    },
                    {
                        id: '_5_25',
                        type: 'image',
                        rect: ['14.3%', '40.7%','25.1%','28.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/25/5_25.png",'0px','0px']
                    },
                    {
                        id: '_5_1',
                        type: 'image',
                        rect: ['60.3%', '4.1%','12.6%','15.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/1/5_1.png",'0px','0px']
                    },
                    {
                        id: '_5_10',
                        type: 'image',
                        rect: ['40.2%', '35.8%','14.3%','16.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/10/5_10.png",'0px','0px']
                    },
                    {
                        id: '_5_11',
                        type: 'image',
                        rect: ['38.6%', '36.7%','11.3%','13.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/11/5_11.png",'0px','0px']
                    },
                    {
                        id: '_5_12',
                        type: 'image',
                        rect: ['38.6%', '50.1%','22.1%','3.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/12/5_12.png",'0px','0px']
                    },
                    {
                        id: '_5_18',
                        type: 'image',
                        rect: ['37.4%', '86.8%','58.3%','4.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/18/5_18.png",'0px','0px']
                    },
                    {
                        id: '_5_19',
                        type: 'image',
                        rect: ['24.7%', '25.9%','22.3%','12.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/19/5_19.png",'0px','0px']
                    },
                    {
                        id: '_5_2',
                        type: 'image',
                        rect: ['61%', '8.7%','11.1%','11.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/2/5_2.png",'0px','0px']
                    },
                    {
                        id: '_5_21',
                        type: 'image',
                        rect: ['36.6%', '38.3%','2.5%','2.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/21/5_21.png",'0px','0px']
                    },
                    {
                        id: '_5_23',
                        type: 'image',
                        rect: ['39.2%', '34.4%','1.3%','1.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/23/5_23.png",'0px','0px']
                    },
                    {
                        id: '_5_22',
                        type: 'image',
                        rect: ['38.5%', '34.2%','1.6%','1.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/22/5_22.png",'0px','0px']
                    },
                    {
                        id: '_5_26',
                        type: 'image',
                        rect: ['5.6%', '33.1%','31%','31%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/26/5_26.png",'0px','0px']
                    },
                    {
                        id: '_5_27',
                        type: 'image',
                        rect: ['9.4%', '41%','24.6%','11.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/27/5_27.png",'0px','0px']
                    },
                    {
                        id: '_5_24',
                        type: 'image',
                        rect: ['40.8%', '32.6%','1.9%','1.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/24/5_24.png",'0px','0px']
                    },
                    {
                        id: '_5_28',
                        type: 'image',
                        rect: ['7.7%', '62.1%','36.4%','8.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/28/5_28.png",'0px','0px']
                    },
                    {
                        id: '_5_29',
                        type: 'image',
                        rect: ['7.4%', '61.8%','12.8%','3.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/29/5_29.png",'0px','0px']
                    },
                    {
                        id: '_5_36',
                        type: 'image',
                        rect: ['50.6%', '27.3%','46.9%','43%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/36/5_36.png",'0px','0px']
                    },
                    {
                        id: '_5_30',
                        type: 'image',
                        rect: ['48.2%', '32.3%','17.8%','31.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/30/5_30.png",'0px','0px']
                    },
                    {
                        id: '_5_31',
                        type: 'image',
                        rect: ['53.6%', '40.7%','1.7%','1.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/31/5_31.png",'0px','0px']
                    },
                    {
                        id: '_5_3',
                        type: 'image',
                        rect: ['53.3%', '8.7%','8.8%','12.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/3/5_3.png",'0px','0px']
                    },
                    {
                        id: '_5_32',
                        type: 'image',
                        rect: ['54%', '41%','1.6%','0.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/32/5_32.png",'0px','0px']
                    },
                    {
                        id: '_5_33',
                        type: 'image',
                        rect: ['55.6%', '36.1%','1.4%','2.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/33/5_33.png",'0px','0px']
                    },
                    {
                        id: '_5_34',
                        type: 'image',
                        rect: ['55.4%', '36.5%','0.8%','1.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/34/5_34.png",'0px','0px']
                    },
                    {
                        id: '_5_35',
                        type: 'image',
                        rect: ['54.8%', '33.7%','1.7%','0.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/35/5_35.png",'0px','0px']
                    },
                    {
                        id: '_5_38',
                        type: 'image',
                        rect: ['63.7%', '32%','5.9%','8.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/38/5_38.png",'0px','0px']
                    },
                    {
                        id: '_5_39',
                        type: 'image',
                        rect: ['62.5%', '33.8%','6.8%','6.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/39/5_39.png",'0px','0px']
                    },
                    {
                        id: '_5_4',
                        type: 'image',
                        rect: ['54.5%', '6.2%','8.3%','17.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/4/5_4.png",'0px','0px']
                    },
                    {
                        id: '_5_47',
                        type: 'image',
                        rect: ['62.5%', '40.5%','25.5%','21%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/47/5_47.png",'0px','0px']
                    },
                    {
                        id: '_5_40',
                        type: 'image',
                        rect: ['66%', '36.3%','5.2%','4.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/40/5_40.png",'0px','0px']
                    },
                    {
                        id: '_5_41',
                        type: 'image',
                        rect: ['65.6%', '40.8%','8.8%','8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/41/5_41.png",'0px','0px']
                    },
                    {
                        id: '_5_42',
                        type: 'image',
                        rect: ['69%', '41%','8.8%','7.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/42/5_42.png",'0px','0px']
                    },
                    {
                        id: '_5_43',
                        type: 'image',
                        rect: ['75.6%', '47.8%','4.6%','8.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/43/5_43.png",'0px','0px']
                    },
                    {
                        id: '_5_44',
                        type: 'image',
                        rect: ['72.1%', '48.8%','5.7%','9.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/44/5_44.png",'0px','0px']
                    },
                    {
                        id: '_5_45',
                        type: 'image',
                        rect: ['80.2%', '53.6%','10.1%','12.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/45/5_45.png",'0px','0px']
                    },
                    {
                        id: '_5_55',
                        type: 'image',
                        rect: ['49.8%', '57.8%','36.9%','15.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/55/5_55.png",'0px','0px']
                    },
                    {
                        id: '_5_46',
                        type: 'image',
                        rect: ['82.8%', '55.6%','10.8%','9.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/46/5_46.png",'0px','0px']
                    },
                    {
                        id: '_5_49',
                        type: 'image',
                        rect: ['57.8%', '45.7%','17.9%','19.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/49/5_49.png",'0px','0px']
                    },
                    {
                        id: '_5_48',
                        type: 'image',
                        rect: ['59.1%', '45.1%','16.3%','19.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/48/5_48.png",'0px','0px']
                    },
                    {
                        id: '_5_5',
                        type: 'image',
                        rect: ['52.7%', '18.9%','14.2%','8.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/5/5_5.png",'0px','0px']
                    },
                    {
                        id: '_5_50',
                        type: 'image',
                        rect: ['60.3%', '54.5%','8.8%','9.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/50/5_50.png",'0px','0px']
                    },
                    {
                        id: '_5_51',
                        type: 'image',
                        rect: ['87.6%', '32.4%','2.5%','3.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/51/5_51.png",'0px','0px']
                    },
                    {
                        id: '_5_52',
                        type: 'image',
                        rect: ['64.8%', '53.1%','4.2%','2.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/52/5_52.png",'0px','0px']
                    },
                    {
                        id: '_5_53',
                        type: 'image',
                        rect: ['62.5%', '45.9%','7.8%','8.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/53/5_53.png",'0px','0px']
                    },
                    {
                        id: '_5_54',
                        type: 'image',
                        rect: ['63.2%', '45.9%','7.6%','8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/54/5_54.png",'0px','0px']
                    },
                    {
                        id: '_5_6',
                        type: 'image',
                        rect: ['52.4%', '22.2%','5.3%','3.6%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/6/5_6.png",'0px','0px']
                    },
                    {
                        id: '_5_7',
                        type: 'image',
                        rect: ['70.7%', '18.9%','9.2%','10.7%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/7/5_7.png",'0px','0px']
                    },
                    {
                        id: '_5_9',
                        type: 'image',
                        rect: ['41.1%', '38.6%','13.3%','12.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/9/5_9.png",'0px','0px']
                    },
                    {
                        id: '_5_8',
                        type: 'image',
                        rect: ['70.3%', '16.8%','17%','23.3%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/5/8/5_8.png",'0px','0px']
                    }]
                },
                {
                    id: 'Rectangle5',
                    type: 'rect',
                    rect: ['-11.1%', '44.5%','35%','15%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(241,241,22,1.00)"],
                    stroke: [0,"rgb(42, 19, 190)","none"],
                    transform: [[],['-90']],
                    c: [
                    {
                        id: 'Ani_5',
                        type: 'rect',
                        rect: ['4.6%', '-40.2%','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'show5',
                    type: 'image',
                    rect: ['61.6%', '84.1%','10.4%','15.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/display.png",'0px','0px']
                },
                {
                    id: 'next_icon9',
                    type: 'image',
                    rect: ['4%', '85%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px'],
                    transform: [[],['180']]
                },
                {
                    id: 'next_icon10',
                    type: 'image',
                    rect: ['4%', '13.4%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px']
                }]
            },
            {
                id: 'Color_Screen_6',
                display: 'none',
                type: 'group',
                rect: ['0%', '0%','100%','100%','auto', 'auto'],
                c: [
                {
                    id: 'last_screen6',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"end.png",'0px','0px']
                },
                {
                    id: 'Screen_6',
                    type: 'image',
                    rect: ['0%', '0%','100%','100%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"2_page.png",'0px','0px']
                },
                {
                    id: 'Group6',
                    type: 'group',
                    rect: ['12.6%', '11.1%','56.9%','80.3%','auto', 'auto'],
                    c: [
                    {
                        id: '_6_outline',
                        type: 'image',
                        rect: ['3.5%', '1.6%','91.9%','95.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/6_outline.png",'0px','0px']
                    },
                    {
                        id: '_6_1',
                        type: 'image',
                        rect: ['0.1%', '0%','99.9%','100%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/1/6_1.png",'0px','0px']
                    },
                    {
                        id: '_6_13',
                        type: 'image',
                        rect: ['19.4%', '44.6%','25.4%','29.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/13/6_13.png",'0px','0px']
                    },
                    {
                        id: '_6_6',
                        type: 'image',
                        rect: ['17.1%', '16%','27.1%','45.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/6/6_6.png",'0px','0px']
                    },
                    {
                        id: '_6_12',
                        type: 'image',
                        rect: ['21.3%', '38%','24.5%','25.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/12/6_12.png",'0px','0px']
                    },
                    {
                        id: '_6_14',
                        type: 'image',
                        rect: ['19.6%', '41.3%','15.4%','14.2%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/14/6_14.png",'0px','0px']
                    },
                    {
                        id: '_6_15',
                        type: 'image',
                        rect: ['19%', '40.7%','14.4%','14.4%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/15/6_15.png",'0px','0px']
                    },
                    {
                        id: '_6_16',
                        type: 'image',
                        rect: ['25.9%', '67.8%','22.7%','20.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/16/6_16.png",'0px','0px']
                    },
                    {
                        id: '_6_17',
                        type: 'image',
                        rect: ['10.8%', '31.1%','15.2%','17.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/17/6_17.png",'0px','0px']
                    },
                    {
                        id: '_6_18',
                        type: 'image',
                        rect: ['13.2%', '34.6%','10.5%','13.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/18/6_18.png",'0px','0px']
                    },
                    {
                        id: '_6_2',
                        type: 'image',
                        rect: ['5.2%', '17.9%','11.4%','9.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/2/6_2.png",'0px','0px']
                    },
                    {
                        id: '_6_3',
                        type: 'image',
                        rect: ['6.9%', '54.3%','10.9%','13.8%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/3/6_3.png",'0px','0px']
                    },
                    {
                        id: '_6_4',
                        type: 'image',
                        rect: ['25.4%', '79.5%','15.7%','13%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/4/6_4.png",'0px','0px']
                    },
                    {
                        id: '_6_5',
                        type: 'image',
                        rect: ['69.6%', '62.9%','13.7%','8.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/5/6_5.png",'0px','0px']
                    },
                    {
                        id: '_6_8',
                        type: 'image',
                        rect: ['25.5%', '25.7%','11.5%','7.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/8/6_8.png",'0px','0px']
                    },
                    {
                        id: '_6_7',
                        type: 'image',
                        rect: ['26.2%', '25%','12.2%','7.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/7/6_7.png",'0px','0px']
                    },
                    {
                        id: '_6_9',
                        type: 'image',
                        rect: ['26.8%', '26.1%','9.8%','4.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/9/6_9.png",'0px','0px']
                    },
                    {
                        id: '_6_10',
                        type: 'image',
                        rect: ['26.8%', '35.2%','6.6%','4.5%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/10/6_10.png",'0px','0px']
                    },
                    {
                        id: '_6_11',
                        type: 'image',
                        rect: ['27.4%', '35.8%','5%','3.1%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/11/6_11.png",'0px','0px']
                    },
                    {
                        id: '_6_19',
                        type: 'image',
                        rect: ['21.4%', '31.4%','2.5%','3.9%','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"TestChange/6/19/6_19.png",'0px','0px']
                    }]
                },
                {
                    id: 'Rectangle6',
                    type: 'rect',
                    rect: ['-11.5%', '44.8%','35%','14.2%','auto', 'auto'],
                    borderRadius: ["10px", "10px", "10px", "10px"],
                    fill: ["rgba(237,244,27,1.00)"],
                    stroke: [0,"rgb(42, 19, 190)","none"],
                    transform: [[],['-90']],
                    c: [
                    {
                        id: 'Ani_6',
                        type: 'rect',
                        rect: ['8.9%', '-15.8%','auto','auto','auto', 'auto']
                    }]
                },
                {
                    id: 'show6',
                    type: 'image',
                    rect: ['61.2%', '84.5%','10.4%','15.6%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/display.png",'0px','0px']
                },
                {
                    id: 'next_icon11',
                    type: 'image',
                    rect: ['4%', '84.8%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px'],
                    transform: [[],['180']]
                },
                {
                    id: 'next_icon12',
                    type: 'image',
                    rect: ['4%', '13.6%','5%','7.5%','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"buttan/level.png",'0px','0px']
                }]
            },
            {
                id: 'Group_colore',
                display: 'none',
                type: 'rect',
                rect: ['73.8%', '16.6%','auto','auto','auto', 'auto']
            },
            {
                id: 'ShowShapeDiv1',
                display: 'none',
                type: 'image',
                rect: ['77.8%', '10.2%','18%','19.4%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"img_open.png",'0px','0px']
            },
            {
                id: 'ShowShapeDiv',
                display: 'none',
                type: 'image',
                rect: ['2.7%', '14.2%','12%','10.5%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"icon/display.png",'0px','0px']
            },
            {
                id: 'repaly_sym',
                display: 'none',
                type: 'rect',
                rect: ['63.2%', '78.8%','auto','auto','auto', 'auto']
            },
            {
                id: 'more_game',
                display: 'none',
                type: 'rect',
                rect: ['81.6%', '78.4%','auto','auto','auto', 'auto']
            },
            {
                id: 'play',
                type: 'image',
                rect: ['46.6%', '92.9%','6.3%','8.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"buttan/off.png",'0px','0px']
            },
            {
                id: 'pause',
                type: 'image',
                rect: ['46.6%', '92.9%','6.3%','8.3%','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"buttan/on.png",'0px','0px']
            }],
            symbolInstances: [
            {
                id: 'Ani_4',
                symbolName: 'Ani_4',
                autoPlay: {

                }
            },
            {
                id: 'repaly_sym',
                symbolName: 'repaly_sym',
                autoPlay: {

                }
            },
            {
                id: 'sym_1',
                symbolName: 'sym_1',
                autoPlay: {

                }
            },
            {
                id: 'Ani_5',
                symbolName: 'Ani_5',
                autoPlay: {

                }
            },
            {
                id: 'play_sym',
                symbolName: 'play_sym',
                autoPlay: {

                }
            },
            {
                id: 'img_sym',
                symbolName: 'Screen_sym',
                autoPlay: {

                }
            },
            {
                id: 'Ani_1',
                symbolName: 'Ani_1',
                autoPlay: {

                }
            },
            {
                id: 'Group_colore',
                symbolName: 'Colore_sym',
                autoPlay: {

                }
            },
            {
                id: 'more_game2',
                symbolName: 'more_sym',
                autoPlay: {

                }
            },
            {
                id: 'Ani_6',
                symbolName: 'Ani_6',
                autoPlay: {

                }
            },
            {
                id: 'img_sym2',
                symbolName: 'Screen_sym_1',
                autoPlay: {

                }
            },
            {
                id: 'Ani_3',
                symbolName: 'Ani_3',
                autoPlay: {

                }
            },
            {
                id: 'more_game',
                symbolName: 'more_sym',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_next_icon12}": [
                ["style", "height", '7.45%'],
                ["style", "top", '13.59%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${__4_18}": [
                ["style", "height", '11.32%'],
                ["style", "top", '60.24%'],
                ["style", "left", '39.95%'],
                ["style", "width", '4.22%']
            ],
            "${__1_8}": [
                ["style", "height", '14.99%'],
                ["style", "top", '73.34%'],
                ["style", "left", '78.36%'],
                ["style", "width", '20.86%']
            ],
            "${__6_4}": [
                ["style", "height", '12.99%'],
                ["style", "top", '79.51%'],
                ["style", "left", '25.4%'],
                ["style", "width", '15.74%']
            ],
            "${_Rectangle22}": [
                ["style", "top", '44.06%'],
                ["color", "background-color", 'rgba(241,22,118,0.00)'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '15%'],
                ["style", "overflow", 'scroll'],
                ["style", "left", '-10.73%'],
                ["style", "width", '34%']
            ],
            "${__6_12}": [
                ["style", "height", '25.2%'],
                ["style", "top", '38.03%'],
                ["style", "left", '21.25%'],
                ["style", "width", '24.5%']
            ],
            "${__5_15}": [
                ["style", "height", '21.42%'],
                ["style", "top", '66.97%'],
                ["style", "left", '0.09%'],
                ["style", "width", '99.06%']
            ],
            "${_Screen_2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ],
            "${__5_10}": [
                ["style", "height", '16.38%'],
                ["style", "top", '35.78%'],
                ["style", "left", '40.16%'],
                ["style", "width", '14.31%']
            ],
            "${_Color_Screen_6}": [
                ["style", "display", 'none']
            ],
            "${__4_26}": [
                ["style", "height", '16.34%'],
                ["style", "top", '13.71%'],
                ["style", "left", '57.73%'],
                ["style", "width", '8.23%']
            ],
            "${_show5}": [
                ["style", "left", '61.56%'],
                ["style", "top", '84.06%']
            ],
            "${__1_5}": [
                ["style", "height", '35.95%'],
                ["style", "top", '64.04%'],
                ["style", "left", '0.27%'],
                ["style", "width", '98.95%']
            ],
            "${__2_20}": [
                ["style", "top", '32.58%'],
                ["style", "height", '4.11%'],
                ["style", "left", '54.76%'],
                ["style", "width", '6.88%']
            ],
            "${__5_49}": [
                ["style", "height", '19.22%'],
                ["style", "top", '45.71%'],
                ["style", "left", '57.85%'],
                ["style", "width", '17.89%']
            ],
            "${__1_1}": [
                ["style", "height", '41.63%'],
                ["style", "top", '0.18%'],
                ["style", "left", '0.27%'],
                ["style", "width", '43.86%']
            ],
            "${__5_16}": [
                ["style", "top", '81.87%'],
                ["transform", "skewY", '-4deg'],
                ["style", "height", '15.28%'],
                ["style", "left", '4.28%'],
                ["style", "width", '91.69%']
            ],
            "${__5_28}": [
                ["style", "height", '8.67%'],
                ["style", "top", '62.08%'],
                ["style", "left", '7.66%'],
                ["style", "width", '36.39%']
            ],
            "${_next_icon4}": [
                ["style", "height", '7.45%'],
                ["style", "top", '12.81%'],
                ["style", "left", '4.17%'],
                ["style", "width", '5%']
            ],
            "${__1_4}": [
                ["style", "height", '63.88%'],
                ["style", "top", '9.95%'],
                ["style", "left", '77.75%'],
                ["style", "width", '21.61%']
            ],
            "${__5_26}": [
                ["style", "height", '31.02%'],
                ["style", "top", '33.11%'],
                ["style", "left", '5.61%'],
                ["style", "width", '30.97%']
            ],
            "${__1_outline2}": [
                ["style", "height", '99.97%'],
                ["style", "top", '0.03%'],
                ["style", "left", '-0.01%'],
                ["style", "width", '99.71%']
            ],
            "${__1_22}": [
                ["style", "height", '33.75%'],
                ["style", "top", '49.69%'],
                ["style", "left", '43.38%'],
                ["style", "width", '29.95%']
            ],
            "${_Color_Screen_2}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${__4_6}": [
                ["style", "height", '11.16%'],
                ["style", "top", '46.56%'],
                ["style", "left", '27%'],
                ["style", "width", '19.39%']
            ],
            "${__5_9}": [
                ["style", "height", '12.44%'],
                ["style", "top", '38.62%'],
                ["style", "left", '41.08%'],
                ["style", "width", '13.29%']
            ],
            "${__5_39}": [
                ["style", "left", '62.53%'],
                ["style", "top", '33.79%']
            ],
            "${_Ani_1}": [
                ["transform", "scaleX", '1.05822'],
                ["style", "top", '37.97%'],
                ["transform", "scaleY", '1.74265'],
                ["style", "left", '17.48%']
            ],
            "${__4_17}": [
                ["style", "height", '20.6%'],
                ["style", "top", '52.21%'],
                ["style", "left", '39.95%'],
                ["style", "width", '3.92%']
            ],
            "${__5_38}": [
                ["style", "height", '8.82%'],
                ["style", "top", '31.98%'],
                ["style", "left", '63.74%'],
                ["style", "width", '5.93%']
            ],
            "${__3_7}": [
                ["style", "height", '5.18%'],
                ["style", "top", '18.51%'],
                ["style", "left", '41.66%'],
                ["style", "width", '5.85%']
            ],
            "${_show6}": [
                ["style", "left", '61.15%'],
                ["style", "top", '84.53%']
            ],
            "${_Group6}": [
                ["style", "top", '11.09%'],
                ["style", "height", '80.3%'],
                ["style", "left", '12.6%'],
                ["style", "width", '56.91%']
            ],
            "${_sym_1}": [
                ["style", "top", '44.74%'],
                ["transform", "scaleY", '2.36889'],
                ["style", "overflow", 'visible'],
                ["transform", "scaleX", '2.44591'],
                ["style", "left", '179.29%'],
                ["transform", "rotateZ", '0deg']
            ],
            "${__5_2}": [
                ["style", "height", '11.19%'],
                ["style", "top", '8.69%'],
                ["style", "left", '61.01%'],
                ["style", "width", '11.05%']
            ],
            "${__1_7}": [
                ["style", "height", '25.23%'],
                ["style", "top", '46.21%'],
                ["style", "left", '0.27%'],
                ["style", "width", '35.94%']
            ],
            "${__3_21}": [
                ["style", "top", '41.45%'],
                ["transform", "rotateZ", '4deg'],
                ["style", "height", '2.2%'],
                ["style", "left", '61.57%'],
                ["style", "width", '4.27%']
            ],
            "${__5_8}": [
                ["style", "left", '70.34%'],
                ["style", "top", '16.81%']
            ],
            "${__5_29}": [
                ["style", "height", '3.31%'],
                ["style", "top", '61.77%'],
                ["style", "left", '7.35%'],
                ["style", "width", '12.78%']
            ],
            "${__5_53}": [
                ["style", "height", '8.19%'],
                ["style", "top", '45.87%'],
                ["style", "left", '62.45%'],
                ["style", "width", '7.76%']
            ],
            "${__5_4}": [
                ["style", "height", '17.32%'],
                ["style", "top", '6.17%'],
                ["style", "left", '54.48%'],
                ["style", "width", '8.28%']
            ],
            "${__4_21}": [
                ["style", "height", '85.82%'],
                ["style", "top", '0.04%'],
                ["style", "left", '29.11%'],
                ["style", "width", '69.29%']
            ],
            "${__3_29}": [
                ["style", "height", '4.87%'],
                ["style", "top", '56.69%'],
                ["style", "left", '39.97%'],
                ["style", "width", '8.44%']
            ],
            "${_Group5}": [
                ["style", "height", '72.66%'],
                ["style", "top", '15.78%'],
                ["style", "left", '16.67%'],
                ["style", "width", '46.2%']
            ],
            "${__4_9}": [
                ["style", "height", '4.09%'],
                ["style", "top", '27.85%'],
                ["style", "left", '61.85%'],
                ["style", "width", '4.61%']
            ],
            "${__5_36}": [
                ["style", "height", '42.99%'],
                ["style", "top", '27.27%'],
                ["style", "left", '50.59%'],
                ["style", "width", '46.92%']
            ],
            "${__5_13}": [
                ["style", "height", '18.88%'],
                ["style", "top", '49.65%'],
                ["style", "left", '0.7%'],
                ["style", "width", '99.26%']
            ],
            "${__6_11}": [
                ["style", "top", '35.84%'],
                ["style", "left", '27.38%'],
                ["style", "width", '4.98%']
            ],
            "${__5_31}": [
                ["style", "height", '1.58%'],
                ["style", "top", '40.73%'],
                ["style", "left", '53.6%'],
                ["style", "width", '1.74%']
            ],
            "${_last_screen2}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${__2_9}": [
                ["style", "top", '22.65%'],
                ["style", "height", '5.99%'],
                ["style", "left", '40.2%'],
                ["style", "width", '4.35%']
            ],
            "${__3_8}": [
                ["style", "height", '21.22%'],
                ["style", "top", '1.84%'],
                ["style", "left", '11.16%'],
                ["style", "width", '24.53%']
            ],
            "${__4_34}": [
                ["style", "height", '35.52%'],
                ["style", "top", '64.47%'],
                ["style", "left", '0.19%'],
                ["style", "width", '98.5%']
            ],
            "${__4_3}": [
                ["style", "height", '35.21%'],
                ["style", "top", '42%'],
                ["style", "left", '21.07%'],
                ["style", "width", '30.23%']
            ],
            "${__4_27}": [
                ["style", "top", '8.43%'],
                ["style", "left", '35.63%'],
                ["style", "width", '10.84%']
            ],
            "${__6_outline}": [
                ["style", "height", '95.93%'],
                ["style", "top", '1.57%'],
                ["style", "left", '3.47%'],
                ["style", "width", '91.89%']
            ],
            "${__3_11}": [
                ["style", "height", '84.71%'],
                ["style", "top", '14.89%'],
                ["style", "left", '71.36%'],
                ["style", "width", '17.33%']
            ],
            "${__4_31}": [
                ["style", "height", '14.15%'],
                ["style", "top", '71.39%'],
                ["style", "left", '59.74%'],
                ["style", "width", '7.63%']
            ],
            "${_Start_Srceen}": [
                ["style", "left", '0%']
            ],
            "${__3_20}": [
                ["style", "height", '3%'],
                ["style", "top", '29.02%'],
                ["style", "left", '58.09%'],
                ["style", "width", '13.27%']
            ],
            "${__5_40}": [
                ["style", "height", '4.09%'],
                ["style", "top", '36.26%'],
                ["style", "left", '66.03%'],
                ["style", "width", '5.22%']
            ],
            "${_play}": [
                ["style", "height", '8.33%'],
                ["style", "top", '92.9%'],
                ["style", "left", '46.56%'],
                ["style", "width", '6.25%']
            ],
            "${_next_icon8}": [
                ["style", "height", '7.45%'],
                ["style", "top", '13.44%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${__5_24}": [
                ["style", "height", '1.26%'],
                ["style", "top", '32.59%'],
                ["style", "left", '40.77%'],
                ["style", "width", '1.85%']
            ],
            "${_Color_Screen_5}": [
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${__2_19}": [
                ["style", "top", '31.8%'],
                ["style", "height", '6.63%'],
                ["style", "left", '52.24%'],
                ["style", "width", '15.82%']
            ],
            "${__4_4}": [
                ["style", "height", '14.46%'],
                ["style", "top", '43.1%'],
                ["style", "left", '20.78%'],
                ["style", "width", '23.09%']
            ],
            "${_next_icon6}": [
                ["style", "height", '7.45%'],
                ["style", "top", '12.97%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${_board1}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${__5_outline}": [
                ["style", "height", '100.01%'],
                ["style", "top", '0.03%'],
                ["style", "left", '3.98%'],
                ["style", "width", '92.1%']
            ],
            "${_Screen_6}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ],
            "${__3_3}": [
                ["style", "height", '13.52%'],
                ["style", "top", '3.88%'],
                ["style", "left", '54.37%'],
                ["style", "width", '14.4%']
            ],
            "${__6_18}": [
                ["style", "height", '13.93%'],
                ["style", "top", '34.59%'],
                ["style", "left", '13.17%'],
                ["style", "width", '10.54%']
            ],
            "${__5_5}": [
                ["style", "height", '8.35%'],
                ["style", "top", '18.94%'],
                ["style", "left", '52.74%'],
                ["style", "width", '14.21%']
            ],
            "${_Rectangle2}": [
                ["color", "background-color", 'rgba(244,229,90,1.00)'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '15%'],
                ["style", "top", '44.53%'],
                ["style", "left", '-11.35%'],
                ["style", "width", '35%']
            ],
            "${__3_23}": [
                ["style", "height", '1.73%'],
                ["style", "top", '41.45%'],
                ["style", "left", '60.23%'],
                ["style", "width", '3.37%']
            ],
            "${_Screen_4}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ],
            "${__4_29}": [
                ["style", "height", '37.57%'],
                ["style", "top", '54.9%'],
                ["style", "left", '48.9%'],
                ["style", "width", '22.09%']
            ],
            "${_Color_Screen_1}": [
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "display", 'none']
            ],
            "${__2_13}": [
                ["style", "top", '31.8%'],
                ["style", "height", '49.19%'],
                ["style", "left", '26.55%'],
                ["style", "width", '38.88%']
            ],
            "${__6_17}": [
                ["style", "height", '17.53%'],
                ["style", "top", '31.15%'],
                ["style", "left", '10.81%'],
                ["style", "width", '15.16%']
            ],
            "${__6_2}": [
                ["style", "height", '9.87%'],
                ["style", "top", '17.85%'],
                ["style", "left", '5.25%'],
                ["style", "width", '11.38%']
            ],
            "${_ShowShapeDiv1}": [
                ["style", "top", '0.78%'],
                ["style", "height", '25.1%'],
                ["style", "display", 'none'],
                ["style", "left", '75.31%'],
                ["style", "width", '24.01%']
            ],
            "${__1_24}": [
                ["style", "height", '10.26%'],
                ["style", "top", '86%'],
                ["style", "left", '40.38%'],
                ["style", "width", '33.38%']
            ],
            "${_Rectangle3}": [
                ["style", "top", '44.53%'],
                ["transform", "rotateZ", '-90deg'],
                ["color", "background-color", 'rgba(244,237,26,1.00)'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '15%'],
                ["style", "opacity", '0.99'],
                ["style", "left", '-11.25%'],
                ["style", "width", '35%']
            ],
            "${__5_14}": [
                ["style", "height", '27.57%'],
                ["style", "top", '58.62%'],
                ["style", "left", '1.53%'],
                ["style", "width", '97.52%']
            ],
            "${_pause}": [
                ["style", "height", '8.33%'],
                ["style", "top", '92.9%'],
                ["style", "left", '46.56%'],
                ["style", "width", '6.25%']
            ],
            "${_img_sym}": [
                ["style", "left", '12.6%']
            ],
            "${__5_18}": [
                ["style", "height", '4.4%'],
                ["style", "top", '86.81%'],
                ["style", "left", '37.41%'],
                ["style", "width", '58.26%']
            ],
            "${_Group_colore}": [
                ["style", "top", '26.09%'],
                ["style", "left", '74.58%'],
                ["style", "display", 'none']
            ],
            "${_Rectangle1}": [
                ["color", "background-color", 'rgba(241,22,118,0.00)'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "left", '-10.21%'],
                ["style", "width", '34%'],
                ["style", "top", '45.78%'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '14.53%'],
                ["color", "border-color", 'rgba(42,19,190,1.00)'],
                ["style", "-webkit-transform-origin", [48,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [48,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__1_16}": [
                ["style", "height", '10.39%'],
                ["style", "top", '24.94%'],
                ["style", "left", '50.44%'],
                ["style", "width", '24.71%']
            ],
            "${__4_33}": [
                ["style", "height", '12.73%'],
                ["style", "top", '79.1%'],
                ["style", "left", '49.69%'],
                ["style", "width", '20.99%']
            ],
            "${__5_22}": [
                ["style", "height", '1.89%'],
                ["style", "top", '34.21%'],
                ["style", "left", '38.53%'],
                ["style", "width", '1.64%']
            ],
            "${__3_30}": [
                ["style", "height", '19.8%'],
                ["style", "top", '54.65%'],
                ["style", "left", '44.93%'],
                ["style", "width", '16.65%']
            ],
            "${__3_1}": [
                ["style", "top", '0.1%'],
                ["transform", "skewX", '10deg'],
                ["style", "height", '1.42%'],
                ["style", "left", '48.31%'],
                ["style", "width", '1.34%']
            ],
            "${__5_55}": [
                ["style", "height", '15.74%'],
                ["style", "top", '57.84%'],
                ["style", "left", '49.77%'],
                ["style", "width", '36.91%']
            ],
            "${_Screen_1}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ],
            "${_Rectangle6}": [
                ["color", "background-color", 'rgba(237,244,27,1.00)'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '14.2%'],
                ["style", "top", '44.84%'],
                ["style", "left", '-11.46%'],
                ["style", "width", '35%']
            ],
            "${__1_21}": [
                ["style", "height", '9.79%'],
                ["style", "top", '49.84%'],
                ["style", "left", '49.59%'],
                ["style", "width", '11.24%']
            ],
            "${__5_54}": [
                ["style", "height", '8.03%'],
                ["style", "top", '45.87%'],
                ["style", "left", '63.16%'],
                ["style", "width", '7.56%']
            ],
            "${_show2}": [
                ["style", "left", '61.15%'],
                ["style", "top", '84.22%']
            ],
            "${__5_46}": [
                ["style", "height", '9.61%'],
                ["style", "top", '55.62%'],
                ["style", "left", '82.79%'],
                ["style", "width", '10.84%']
            ],
            "${__4_14}": [
                ["style", "top", '26.31%'],
                ["style", "left", '36.03%'],
                ["style", "width", '0.91%']
            ],
            "${__5_35}": [
                ["style", "height", '0.8%'],
                ["style", "top", '33.73%'],
                ["style", "left", '54.78%'],
                ["style", "width", '1.74%']
            ],
            "${__4_19}": [
                ["style", "height", '28.45%'],
                ["style", "top", '71.39%'],
                ["style", "left", '13.25%'],
                ["style", "width", '36.35%']
            ],
            "${_last_screen5}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${_last_screen4}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${__6_15}": [
                ["style", "height", '14.4%'],
                ["style", "top", '40.7%'],
                ["style", "left", '18.99%'],
                ["style", "width", '14.42%']
            ],
            "${_show1}": [
                ["style", "left", '61.04%'],
                ["style", "top", '85.16%']
            ],
            "${__6_5}": [
                ["style", "height", '8.14%'],
                ["style", "top", '62.92%'],
                ["style", "left", '69.56%'],
                ["style", "width", '13.74%']
            ],
            "${_next_icon10}": [
                ["style", "height", '7.45%'],
                ["style", "top", '13.44%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${_show3}": [
                ["style", "left", '61.25%'],
                ["style", "top", '84.38%']
            ],
            "${__5_51}": [
                ["style", "height", '3.47%'],
                ["style", "top", '32.38%'],
                ["style", "left", '87.61%'],
                ["style", "width", '2.45%']
            ],
            "${__2_10}": [
                ["style", "top", '18.06%'],
                ["style", "height", '23.03%'],
                ["style", "left", '79.08%'],
                ["style", "width", '20.18%']
            ],
            "${__4_10}": [
                ["style", "height", '3.14%'],
                ["style", "top", '33.21%'],
                ["style", "left", '39.66%'],
                ["style", "width", '2.8%']
            ],
            "${_next_icon3}": [
                ["style", "top", '84.69%'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '7.45%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${__6_6}": [
                ["style", "height", '45.85%'],
                ["style", "top", '15.97%'],
                ["style", "left", '17.1%'],
                ["style", "width", '27.11%']
            ],
            "${__3_31}": [
                ["style", "height", '3.93%'],
                ["style", "top", '61.56%'],
                ["style", "left", '55.95%'],
                ["style", "width", '4.37%']
            ],
            "${__4_16}": [
                ["style", "height", '26.25%'],
                ["style", "top", '49.54%'],
                ["style", "left", '24.19%'],
                ["style", "width", '19.18%']
            ],
            "${__5_33}": [
                ["style", "height", '2.2%'],
                ["style", "top", '36.1%'],
                ["style", "left", '55.6%'],
                ["style", "width", '1.44%']
            ],
            "${_Ani_4}": [
                ["transform", "scaleX", '0.36653'],
                ["style", "top", '-108.86%'],
                ["transform", "scaleY", '0.37126'],
                ["style", "left", '-1033.86%']
            ],
            "${__3_10}": [
                ["style", "height", '30.65%'],
                ["style", "top", '3.88%'],
                ["style", "left", '21.29%'],
                ["style", "width", '63.13%']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '100%'],
                ["style", "width", '100%']
            ],
            "${__2_11}": [
                ["style", "top", '0.61%'],
                ["style", "height", '22.23%'],
                ["style", "left", '38.82%'],
                ["style", "width", '10.77%']
            ],
            "${__3_22}": [
                ["style", "top", '39.54%'],
                ["style", "height", '2.05%'],
                ["style", "-webkit-transform-origin", [54,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [54,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [54,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [54,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [54,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '43.41%'],
                ["style", "width", '5.51%']
            ],
            "${__5_12}": [
                ["style", "height", '3.93%'],
                ["style", "top", '50.11%'],
                ["style", "left", '38.63%'],
                ["style", "width", '22.08%']
            ],
            "${__5_32}": [
                ["style", "top", '40.97%'],
                ["style", "left", '53.97%'],
                ["style", "width", '1.64%']
            ],
            "${__3_14}": [
                ["style", "height", '66.17%'],
                ["style", "top", '23.21%'],
                ["style", "left", '0.83%'],
                ["style", "width", '71.67%']
            ],
            "${__3_19}": [
                ["style", "height", '5.03%'],
                ["style", "top", '31.86%'],
                ["style", "left", '57.75%'],
                ["style", "width", '13.61%']
            ],
            "${__5_50}": [
                ["style", "height", '9.61%'],
                ["style", "top", '54.52%'],
                ["style", "left", '60.3%'],
                ["style", "width", '8.79%']
            ],
            "${_repaly_sym}": [
                ["style", "top", '84.06%'],
                ["transform", "scaleY", '0.7381'],
                ["transform", "scaleX", '0.73846'],
                ["style", "left", '53.02%'],
                ["style", "display", 'none']
            ],
            "${_play_sym}": [
                ["transform", "scaleX", '0.8597'],
                ["style", "left", '36.25%'],
                ["transform", "scaleY", '0.85952'],
                ["style", "top", '44.53%']
            ],
            "${_next_icon9}": [
                ["style", "top", '85%'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '7.45%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${__2_17}": [
                ["style", "top", '25.96%'],
                ["style", "height", '4.05%'],
                ["style", "left", '53.95%'],
                ["style", "width", '8.04%']
            ],
            "${__4_36}": [
                ["style", "height", '7.71%'],
                ["style", "top", '61.02%'],
                ["style", "left", '66.57%'],
                ["style", "width", '8.63%']
            ],
            "${__4_11}": [
                ["style", "height", '0.8%'],
                ["style", "top", '34.46%'],
                ["style", "left", '40.56%'],
                ["style", "width", '1.1%']
            ],
            "${__4_24}": [
                ["style", "height", '3.93%'],
                ["style", "top", '41.67%'],
                ["style", "left", '55.87%'],
                ["style", "width", '5.42%']
            ],
            "${_next_icon1}": [
                ["style", "top", '85%'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '7.45%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${_Ani_6}": [
                ["transform", "scaleX", '1.62093'],
                ["style", "top", '33.78%'],
                ["style", "left", '99.72%'],
                ["transform", "scaleY", '1.28696']
            ],
            "${__6_9}": [
                ["style", "height", '4.54%'],
                ["style", "top", '26.15%'],
                ["style", "left", '26.81%'],
                ["style", "width", '9.8%']
            ],
            "${_Board_Screen}": [
                ["style", "display", 'none']
            ],
            "${__3_6}": [
                ["style", "height", '2.83%'],
                ["style", "top", '7.97%'],
                ["style", "left", '33.9%'],
                ["style", "width", '2.68%']
            ],
            "${__1_18}": [
                ["style", "height", '9.14%'],
                ["style", "top", '44.32%'],
                ["style", "left", '58.46%'],
                ["style", "width", '14.55%']
            ],
            "${__5_34}": [
                ["style", "height", '1.42%'],
                ["style", "top", '36.46%'],
                ["style", "left", '55.41%'],
                ["style", "width", '0.82%']
            ],
            "${__5_42}": [
                ["style", "height", '7.57%'],
                ["style", "top", '40.97%'],
                ["style", "left", '68.99%'],
                ["style", "width", '8.79%']
            ],
            "${_next_icon7}": [
                ["style", "top", '85%'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '7.45%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${_next2}": [
                ["style", "top", '74.06%'],
                ["transform", "scaleY", '0.59184'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '16.9%'],
                ["transform", "scaleX", '0.54128'],
                ["style", "left", '47.19%'],
                ["style", "width", '12.32%']
            ],
            "${__5_6}": [
                ["style", "height", '3.62%'],
                ["style", "top", '22.23%'],
                ["style", "left", '52.43%'],
                ["style", "width", '5.31%']
            ],
            "${__2_8}": [
                ["style", "top", '35.11%'],
                ["style", "height", '2.67%'],
                ["style", "left", '10.37%'],
                ["style", "width", '7.23%']
            ],
            "${_Group3}": [
                ["style", "top", '14.69%'],
                ["style", "left", '17.29%'],
                ["style", "height", '71.8%']
            ],
            "${__4_28}": [
                ["style", "height", '19.02%'],
                ["style", "top", '44.67%'],
                ["style", "left", '50.5%'],
                ["style", "width", '21.39%']
            ],
            "${__1_15}": [
                ["style", "height", '35.79%'],
                ["style", "top", '18.62%'],
                ["style", "left", '46.69%'],
                ["style", "width", '30.91%']
            ],
            "${_Screen_3}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ],
            "${_Color_Screen_3}": [
                ["style", "display", 'none']
            ],
            "${__1_11}": [
                ["style", "height", '0.8%'],
                ["style", "top", '17.36%'],
                ["style", "left", '59.53%'],
                ["style", "width", '3.1%']
            ],
            "${_Rectangle4}": [
                ["style", "top", '44.53%'],
                ["color", "background-color", 'rgba(241,241,22,1.00)'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '15%'],
                ["style", "overflow", 'scroll'],
                ["style", "left", '-11.15%'],
                ["style", "width", '35%']
            ],
            "${__6_1}": [
                ["style", "height", '99.99%'],
                ["style", "top", '0.01%'],
                ["style", "left", '0.06%'],
                ["style", "width", '99.92%']
            ],
            "${__4_37}": [
                ["style", "height", '9.27%'],
                ["style", "top", '64.32%'],
                ["style", "left", '48.39%'],
                ["style", "width", '8.44%']
            ],
            "${_Group1}": [
                ["style", "top", '16.56%'],
                ["style", "height", '65.9%'],
                ["style", "left", '20.1%'],
                ["style", "width", '37.97%']
            ],
            "${__1_12}": [
                ["style", "height", '1.73%'],
                ["style", "top", '13.15%'],
                ["style", "left", '60.5%'],
                ["style", "width", '5.78%']
            ],
            "${__5_11}": [
                ["style", "height", '13.39%'],
                ["style", "top", '36.73%'],
                ["style", "left", '38.63%'],
                ["style", "width", '11.25%']
            ],
            "${__2_7}": [
                ["style", "top", '31.33%'],
                ["style", "height", '4.41%'],
                ["style", "left", '9.57%'],
                ["style", "width", '7.23%']
            ],
            "${__1_17}": [
                ["style", "height", '22.85%'],
                ["style", "top", '30.3%'],
                ["style", "left", '61.68%'],
                ["style", "width", '9.63%']
            ],
            "${__2_16}": [
                ["style", "top", '22.65%'],
                ["style", "height", '27.12%'],
                ["style", "left", '35.5%'],
                ["style", "width", '36%']
            ],
            "${_show4}": [
                ["style", "left", '60.83%'],
                ["style", "top", '84.53%']
            ],
            "${__3_4}": [
                ["style", "height", '8.18%'],
                ["style", "top", '0.1%'],
                ["style", "left", '78.9%'],
                ["style", "width", '9.34%']
            ],
            "${__5_21}": [
                ["style", "height", '2.05%'],
                ["style", "top", '38.3%'],
                ["style", "left", '36.59%'],
                ["style", "width", '2.45%']
            ],
            "${_Group4}": [
                ["style", "height", '70%'],
                ["style", "top", '13.44%'],
                ["style", "left", '15.31%'],
                ["style", "width", '51.5%']
            ],
            "${__1_10}": [
                ["style", "height", '40.05%'],
                ["style", "top", '9.17%'],
                ["style", "left", '25.84%'],
                ["style", "width", '58.41%']
            ],
            "${__4_25}": [
                ["style", "height", '33.95%'],
                ["style", "top", '4.29%'],
                ["style", "left", '45.14%'],
                ["style", "width", '25.8%']
            ],
            "${__6_3}": [
                ["style", "height", '13.77%'],
                ["style", "top", '54.31%'],
                ["style", "left", '6.94%'],
                ["style", "width", '10.85%']
            ],
            "${__3_27}": [
                ["style", "height", '10.69%'],
                ["style", "top", '48.21%'],
                ["style", "left", '39.97%'],
                ["style", "width", '32.08%']
            ],
            "${__4_23}": [
                ["style", "top", '19.69%'],
                ["style", "left", '48.39%'],
                ["style", "width", '1.82%']
            ],
            "${__5_43}": [
                ["style", "height", '8.82%'],
                ["style", "top", '47.76%'],
                ["style", "left", '75.64%'],
                ["style", "width", '4.6%']
            ],
            "${__3_24}": [
                ["style", "height", '3.45%'],
                ["style", "top", '40.98%'],
                ["style", "left", '59.44%'],
                ["style", "width", '7.2%']
            ],
            "${_next1}": [
                ["style", "top", '77.84%'],
                ["transform", "rotateZ", '270deg'],
                ["style", "height", '10.16%'],
                ["transform", "scaleX", '-1.06667'],
                ["style", "left", '37.4%'],
                ["style", "width", '6.25%']
            ],
            "${__3_outline}": [
                ["style", "height", '100.12%'],
                ["style", "top", '-0.05%'],
                ["style", "left", '0.03%'],
                ["style", "width", '100.03%']
            ],
            "${__4_32}": [
                ["style", "height", '8.18%'],
                ["style", "top", '75.48%'],
                ["style", "left", '60.54%'],
                ["style", "width", '3.42%']
            ],
            "${__5_20}": [
                ["style", "height", '37.65%'],
                ["style", "top", '29.79%'],
                ["style", "left", '26.98%'],
                ["style", "width", '26.17%']
            ],
            "${__3_25}": [
                ["style", "height", '27.5%'],
                ["style", "top", '47.74%'],
                ["style", "left", '42.45%'],
                ["style", "width", '44.89%']
            ],
            "${_last_screen3}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${__2_14}": [
                ["style", "top", '74.84%'],
                ["style", "height", '9.77%'],
                ["style", "left", '17.14%'],
                ["style", "width", '59.4%']
            ],
            "${__4_8}": [
                ["style", "height", '14.93%'],
                ["style", "top", '45.77%'],
                ["style", "left", '31.33%'],
                ["style", "width", '19.28%']
            ],
            "${_Rectangle5}": [
                ["style", "top", '44.53%'],
                ["color", "background-color", 'rgba(241,241,22,1.00)'],
                ["style", "overflow", 'scroll'],
                ["style", "height", '15%'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "left", '-11.15%'],
                ["style", "width", '35%']
            ],
            "${__1_2}": [
                ["style", "height", '65.28%'],
                ["style", "top", '0.61%'],
                ["style", "left", '27.2%'],
                ["style", "width", '72.1%']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(241,241,22,1.00)'],
                ["transform", "rotateZ", '-90deg'],
                ["style", "height", '15%'],
                ["style", "top", '44.22%'],
                ["style", "left", '-11.35%'],
                ["style", "width", '35%']
            ],
            "${__1_20}": [
                ["style", "top", '50.79%'],
                ["style", "left", '53.86%'],
                ["style", "width", '1.5%']
            ],
            "${__5_37}": [
                ["style", "height", '53.07%'],
                ["style", "top", '0.19%'],
                ["style", "left", '33.93%'],
                ["style", "width", '61.84%']
            ],
            "${__6_14}": [
                ["style", "height", '14.24%'],
                ["style", "top", '41.33%'],
                ["style", "left", '19.57%'],
                ["style", "width", '15.42%']
            ],
            "${__5_7}": [
                ["style", "height", '10.7%'],
                ["style", "top", '18.94%'],
                ["style", "left", '70.73%'],
                ["style", "width", '9.2%']
            ],
            "${__3_15}": [
                ["style", "height", '47.46%'],
                ["style", "top", '40.51%'],
                ["style", "left", '3.86%'],
                ["style", "width", '45.45%']
            ],
            "${__5_25}": [
                ["style", "height", '28.35%'],
                ["style", "top", '40.66%'],
                ["style", "left", '14.3%'],
                ["style", "width", '25.05%']
            ],
            "${__5_30}": [
                ["style", "height", '31.65%'],
                ["style", "top", '32.32%'],
                ["style", "left", '48.24%'],
                ["style", "width", '17.78%']
            ],
            "${_ShowShapeDiv}": [
                ["style", "top", '5.78%'],
                ["style", "height", '16.9%'],
                ["style", "display", 'none'],
                ["style", "left", '80.83%'],
                ["style", "width", '12.3%']
            ],
            "${__1_14}": [
                ["style", "height", '22.7%'],
                ["style", "top", '23.36%'],
                ["style", "left", '40.91%'],
                ["style", "width", '46.65%']
            ],
            "${__6_7}": [
                ["style", "height", '7.52%'],
                ["style", "top", '25.05%'],
                ["style", "left", '26.23%'],
                ["style", "width", '12.17%']
            ],
            "${__4_13}": [
                ["style", "height", '2.83%'],
                ["style", "top", '26.51%'],
                ["style", "left", '34.62%'],
                ["style", "width", '2.8%']
            ],
            "${__6_19}": [
                ["style", "height", '3.85%'],
                ["style", "top", '31.41%'],
                ["style", "left", '21.43%'],
                ["style", "width", '2.5%']
            ],
            "${__3_16}": [
                ["style", "height", '30.01%'],
                ["style", "top", '54.18%'],
                ["style", "left", '8.47%'],
                ["style", "width", '31.84%']
            ],
            "${__6_8}": [
                ["style", "height", '7.52%'],
                ["style", "top", '25.68%'],
                ["style", "left", '25.5%'],
                ["style", "width", '11.48%']
            ],
            "${__2_3}": [
                ["style", "top", '28.32%'],
                ["style", "height", '56.13%'],
                ["style", "left", '35.95%'],
                ["style", "width", '8.94%']
            ],
            "${_Ani_3}": [
                ["style", "top", '12.48%'],
                ["transform", "scaleX", '0.97534'],
                ["transform", "scaleY", '0.97532'],
                ["style", "left", '-9.24%']
            ],
            "${__4_5}": [
                ["style", "height", '14.15%'],
                ["style", "top", '43.1%'],
                ["style", "left", '21.07%'],
                ["style", "width", '23.9%']
            ],
            "${__1_9}": [
                ["style", "height", '13.71%'],
                ["style", "top", '7.28%'],
                ["style", "left", '56.64%'],
                ["style", "width", '16.37%']
            ],
            "${__5_19}": [
                ["style", "height", '12.45%'],
                ["style", "top", '25.85%'],
                ["style", "left", '24.73%'],
                ["style", "width", '22.29%']
            ],
            "${__3_13}": [
                ["style", "height", '40.55%'],
                ["style", "top", '59.2%'],
                ["style", "left", '2.96%'],
                ["style", "width", '95.07%']
            ],
            "${__1_13}": [
                ["style", "height", '3.63%'],
                ["style", "top", '10.43%'],
                ["style", "left", '59.64%'],
                ["style", "width", '7.16%']
            ],
            "${__4_38}": [
                ["style", "height", '6.76%'],
                ["style", "top", '71.08%'],
                ["style", "left", '42.06%'],
                ["style", "width", '7.23%']
            ],
            "${__2_4}": [
                ["style", "top", '37.46%'],
                ["style", "height", '45.57%'],
                ["style", "left", '11.99%'],
                ["style", "width", '17.09%']
            ],
            "${__3_2}": [
                ["style", "height", '3.3%'],
                ["style", "top", '1.05%'],
                ["style", "left", '38.62%'],
                ["style", "width", '3.48%']
            ],
            "${__1_19}": [
                ["style", "height", '8.67%'],
                ["style", "top", '42.59%'],
                ["style", "left", '51.19%'],
                ["style", "width", '5.56%']
            ],
            "${__6_13}": [
                ["style", "height", '29.89%'],
                ["style", "top", '44.61%'],
                ["style", "left", '19.36%'],
                ["style", "width", '25.44%']
            ],
            "${__6_16}": [
                ["style", "height", '20.81%'],
                ["style", "top", '67.77%'],
                ["style", "left", '25.86%'],
                ["style", "width", '22.71%']
            ],
            "${__5_23}": [
                ["style", "top", '34.42%'],
                ["style", "left", '39.19%'],
                ["style", "width", '1.33%']
            ],
            "${__4_1}": [
                ["style", "height", '84.71%'],
                ["style", "top", '15.13%'],
                ["style", "left", '8.92%'],
                ["style", "width", '30.63%']
            ],
            "${_last_screen1}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${__5_41}": [
                ["style", "height", '8.03%'],
                ["style", "top", '40.82%'],
                ["style", "left", '65.62%'],
                ["style", "width", '8.79%']
            ],
            "${__1_25}": [
                ["style", "height", '4.9%'],
                ["style", "top", '94.32%'],
                ["style", "left", '39.1%'],
                ["style", "width", '42.68%']
            ],
            "${__2_15}": [
                ["style", "top", '43.14%'],
                ["style", "height", '34.69%'],
                ["style", "left", '24.37%'],
                ["style", "width", '38.07%']
            ],
            "${_next_icon11}": [
                ["style", "top", '84.84%'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '7.45%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${__4_22}": [
                ["style", "height", '5.67%'],
                ["style", "top", '16.38%'],
                ["style", "left", '48.39%'],
                ["style", "width", '4.22%']
            ],
            "${__3_18}": [
                ["style", "height", '5.97%'],
                ["style", "top", '31.7%'],
                ["style", "left", '55.95%'],
                ["style", "width", '15.41%']
            ],
            "${__2_12}": [
                ["style", "top", '7.03%'],
                ["style", "height", '24.92%'],
                ["style", "left", '0.16%'],
                ["style", "width", '15.72%']
            ],
            "${_Group2}": [
                ["style", "height", '76.5%'],
                ["style", "top", '12.81%'],
                ["style", "left", '20.52%'],
                ["style", "width", '40.53%']
            ],
            "${__1_3}": [
                ["style", "height", '58.34%'],
                ["style", "top", '0.4%'],
                ["style", "left", '0.27%'],
                ["style", "width", '84.83%']
            ],
            "${__6_10}": [
                ["style", "height", '4.54%'],
                ["style", "top", '35.22%'],
                ["style", "left", '26.81%'],
                ["style", "width", '6.61%']
            ],
            "${__5_1}": [
                ["style", "height", '15.9%'],
                ["style", "top", '4.12%'],
                ["style", "left", '60.3%'],
                ["style", "width", '12.58%']
            ],
            "${__2_5}": [
                ["style", "top", '38.58%'],
                ["style", "height", '12.93%'],
                ["style", "left", '74.02%'],
                ["style", "width", '17.89%']
            ],
            "${_page_first}": [
                ["style", "height", '100%'],
                ["style", "top", '0%'],
                ["style", "left", '0%'],
                ["style", "width", '100%']
            ],
            "${__4_2}": [
                ["style", "height", '35.37%'],
                ["style", "top", '18.74%'],
                ["style", "left", '25.29%'],
                ["style", "width", '43.68%']
            ],
            "${_Screen_5}": [
                ["style", "top", '0%'],
                ["style", "left", '0%']
            ],
            "${__2_18}": [
                ["style", "left", '54.76%'],
                ["style", "top", '26.72%']
            ],
            "${__2_2}": [
                ["style", "top", '49.77%'],
                ["style", "height", '34.69%'],
                ["style", "left", '59.47%'],
                ["style", "width", '26.95%']
            ],
            "${__1_6}": [
                ["style", "height", '20.51%'],
                ["style", "top", '60.57%'],
                ["style", "left", '0.27%'],
                ["style", "width", '33.38%']
            ],
            "${__5_47}": [
                ["style", "height", '20.95%'],
                ["style", "top", '40.5%'],
                ["style", "left", '62.45%'],
                ["style", "width", '25.45%']
            ],
            "${__5_17}": [
                ["style", "height", '9.94%'],
                ["style", "top", '85.86%'],
                ["style", "left", '4.39%'],
                ["style", "width", '91.38%']
            ],
            "${__3_5}": [
                ["style", "height", '6.76%'],
                ["style", "top", '5.93%'],
                ["style", "left", '42.9%'],
                ["style", "width", '7.65%']
            ],
            "${__3_17}": [
                ["style", "height", '46.05%'],
                ["style", "top", '26.82%'],
                ["style", "left", '47.17%'],
                ["style", "width", '39.28%']
            ],
            "${_more_game2}": [
                ["style", "top", '68.91%'],
                ["transform", "scaleY", '0.88563'],
                ["transform", "scaleX", '0.88615'],
                ["style", "left", '36.98%'],
                ["style", "display", 'block']
            ],
            "${_img_sym2}": [
                ["style", "top", '24.69%'],
                ["style", "left", '12.6%'],
                ["style", "display", 'none']
            ],
            "${__1_23}": [
                ["style", "height", '19.71%'],
                ["style", "top", '78.85%'],
                ["style", "left", '39.53%'],
                ["style", "width", '41.82%']
            ],
            "${__3_32}": [
                ["style", "height", '11.63%'],
                ["style", "top", '70.37%'],
                ["style", "left", '25.91%'],
                ["style", "width", '17.44%']
            ],
            "${__4_12}": [
                ["style", "height", '1.26%'],
                ["style", "top", '23.09%'],
                ["style", "left", '34.82%'],
                ["style", "width", '2.8%']
            ],
            "${__3_28}": [
                ["style", "height", '17.6%'],
                ["style", "top", '55.27%'],
                ["style", "left", '40.76%'],
                ["style", "width", '49.96%']
            ],
            "${__5_52}": [
                ["style", "height", '2.37%'],
                ["style", "top", '53.1%'],
                ["style", "left", '64.8%'],
                ["style", "width", '4.19%']
            ],
            "${__5_45}": [
                ["style", "height", '12.12%'],
                ["style", "top", '53.58%'],
                ["style", "left", '80.23%'],
                ["style", "width", '10.12%']
            ],
            "${_Color_Screen_4}": [
                ["style", "display", 'none']
            ],
            "${_last_screen6}": [
                ["style", "left", '0%'],
                ["style", "top", '0%']
            ],
            "${__5_44}": [
                ["style", "height", '9.77%'],
                ["style", "top", '48.85%'],
                ["style", "left", '72.06%'],
                ["style", "width", '5.72%']
            ],
            "${__4_35}": [
                ["style", "height", '13.21%'],
                ["style", "top", '61.81%'],
                ["style", "left", '74%'],
                ["style", "width", '14.37%']
            ],
            "${_Ani_5}": [
                ["transform", "scaleX", '1.07324'],
                ["style", "top", '26.58%'],
                ["style", "left", '48.97%'],
                ["transform", "scaleY", '1.54146']
            ],
            "${_next_icon2}": [
                ["style", "top", '13.28%'],
                ["style", "height", '7.45%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${__4_7}": [
                ["style", "height", '11.01%'],
                ["style", "top", '46.56%'],
                ["style", "left", '28.31%'],
                ["style", "width", '17.27%']
            ],
            "${__4_30}": [
                ["style", "height", '11.49%'],
                ["style", "top", '72.17%'],
                ["style", "left", '54.72%'],
                ["style", "width", '8.73%']
            ],
            "${__3_9}": [
                ["style", "height", '8.96%'],
                ["style", "top", '26.66%'],
                ["style", "left", '26.26%'],
                ["style", "width", '9.44%']
            ],
            "${__4_15}": [
                ["style", "height", '2.51%'],
                ["style", "top", '53.95%'],
                ["style", "left", '47.09%'],
                ["style", "width", '2.51%']
            ],
            "${__5_3}": [
                ["style", "height", '12.61%'],
                ["style", "top", '8.69%'],
                ["style", "left", '53.26%'],
                ["style", "width", '8.79%']
            ],
            "${_next_icon5}": [
                ["style", "top", '85%'],
                ["transform", "rotateZ", '180deg'],
                ["style", "height", '7.45%'],
                ["style", "left", '3.96%'],
                ["style", "width", '5%']
            ],
            "${__2_outline}": [
                ["style", "top", '-0.06%'],
                ["style", "height", '100.14%'],
                ["style", "left", '0.06%'],
                ["style", "width", '100.01%']
            ],
            "${__4_20}": [
                ["style", "height", '45.2%'],
                ["style", "top", '0.58%'],
                ["style", "left", '36.23%'],
                ["style", "width", '63.91%']
            ],
            "${__3_26}": [
                ["style", "height", '11.63%'],
                ["style", "top", '48.21%'],
                ["style", "left", '39.52%'],
                ["style", "width", '31.39%']
            ],
            "${__2_6}": [
                ["style", "top", '35.57%'],
                ["style", "height", '18.14%'],
                ["style", "left", '72.3%'],
                ["style", "width", '22.25%']
            ],
            "${__5_48}": [
                ["style", "height", '19.22%'],
                ["style", "top", '45.07%'],
                ["style", "left", '59.08%'],
                ["style", "width", '16.25%']
            ],
            "${_more_game}": [
                ["style", "top", '83.75%'],
                ["transform", "scaleY", '0.7381'],
                ["transform", "scaleX", '0.73846'],
                ["style", "left", '32.71%'],
                ["style", "display", 'none']
            ],
            "${__2_1}": [
                ["style", "top", '72.47%'],
                ["style", "height", '26.81%'],
                ["style", "left", '2.59%'],
                ["style", "width", '88.08%']
            ],
            "${__4_outline}": [
                ["style", "height", '98.08%'],
                ["style", "top", '1.93%'],
                ["style", "left", '0.09%'],
                ["style", "width", '98.71%']
            ],
            "${__3_12}": [
                ["style", "height", '46.83%'],
                ["style", "top", '52.91%'],
                ["style", "left", '0.83%'],
                ["style", "width", '98.79%']
            ],
            "${__5_27}": [
                ["style", "height", '11.5%'],
                ["style", "top", '40.97%'],
                ["style", "left", '9.39%'],
                ["style", "width", '24.64%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid563", tween: [ "style", "${_more_game}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid423", tween: [ "style", "${_Color_Screen_3}", "display", 'none', { fromValue: 'none'}], position: 16, duration: 0 },
                { id: "eid20", tween: [ "style", "${_ShowShapeDiv1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid851", tween: [ "transform", "${_more_game2}", "scaleX", '0.88615', { fromValue: '0.88615'}], position: 0, duration: 0 },
                { id: "eid282", tween: [ "style", "${_Board_Screen}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid281", tween: [ "style", "${_Color_Screen_1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid848", tween: [ "style", "${_more_game2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid852", tween: [ "transform", "${_more_game2}", "scaleY", '0.88563', { fromValue: '0.88563'}], position: 0, duration: 0 },
                { id: "eid424", tween: [ "style", "${_Color_Screen_6}", "display", 'none', { fromValue: 'none'}], position: 16, duration: 0 },
                { id: "eid13", tween: [ "style", "${_ShowShapeDiv}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid422", tween: [ "style", "${_Color_Screen_4}", "display", 'none', { fromValue: 'none'}], position: 16, duration: 0 },
                { id: "eid11", tween: [ "style", "${_Group_colore}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid425", tween: [ "style", "${_Color_Screen_5}", "display", 'none', { fromValue: 'none'}], position: 16, duration: 0 },
                { id: "eid860", tween: [ "style", "${_more_game2}", "top", '68.91%', { fromValue: '68.91%'}], position: 0, duration: 0 },
                { id: "eid859", tween: [ "style", "${_more_game2}", "left", '36.98%', { fromValue: '36.98%'}], position: 0, duration: 0 },
                { id: "eid280", tween: [ "style", "${_Color_Screen_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid55", tween: [ "style", "${_img_sym2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid564", tween: [ "style", "${_repaly_sym}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid806", tween: [ "style", "${_Ani_4}", "top", '-108.86%', { fromValue: '-108.86%'}], position: 0, duration: 0 }            ]
        }
    }
},
"play_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'game',
                    type: 'image',
                    rect: ['0%', '-0.3%', '99.7%', '100.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/buttan/game.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_game}": [
                ["style", "top", '-0.3%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '100.14%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0.01%'],
                ["style", "width", '99.66%']
            ],
            "${symbolSelector}": [
                ["style", "height", '19.53%'],
                ["style", "width", '13.96%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid9", tween: [ "transform", "${_game}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid10", tween: [ "transform", "${_game}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid7", tween: [ "transform", "${_game}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid8", tween: [ "transform", "${_game}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
        }
    }
},
"Colore_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0.2%', '0.1%', '99.8%', '100%', 'auto', 'auto'],
                    id: 'Group_colore',
                    display: 'block',
                    type: 'group',
                    c: [
                    {
                        id: 'ALL_col',
                        type: 'image',
                        rect: ['0%', '0%', '99.9%', '100.1%', 'auto', 'auto'],
                        fill: ['rgba(0,0,0,0)', 'images/All_col.png', '0px', '0px']
                    },
                    {
                        rect: ['64.7%', '15.5%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'yewllo',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['41%', '7.8%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'orrnge',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['15.5%', '58.6%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'marun',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['40.3%', '36.2%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'sky_blue',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['16.5%', '73.3%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'green',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['14.7%', '15.5%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'forest_green',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['14.3%', '44.2%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'sky_blue2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['65.1%', '29.5%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'blue',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['39.7%', '51.9%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'nevy_blue',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['40.1%', '65.7%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'pink',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['39.7%', '80%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'pink2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['40.1%', '22.4%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'brown',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['15.9%', '29.5%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'gray',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['64.7%', '43.5%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'gray2',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['65.1%', '58.6%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'gray3',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    },
                    {
                        rect: ['65.9%', '72.6%', '18.8%', '11.2%', 'auto', 'auto'],
                        borderRadius: ['50%', '50%', '50%', '50%'],
                        id: 'white',
                        stroke: [0, 'rgb(0, 0, 0)', 'none'],
                        type: 'ellipse',
                        fill: ['rgba(192,192,192,0)']
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_orrnge}": [
                ["style", "top", '7.76%'],
                ["style", "height", '11.15%'],
                ["style", "left", '41.04%'],
                ["style", "width", '18.84%']
            ],
            "${_yewllo}": [
                ["style", "height", '11.15%'],
                ["style", "top", '15.52%'],
                ["style", "left", '64.68%'],
                ["style", "width", '18.84%']
            ],
            "${_sky_blue}": [
                ["style", "top", '36.21%'],
                ["style", "height", '11.15%'],
                ["style", "left", '40.29%'],
                ["style", "width", '18.84%']
            ],
            "${_Group_colore}": [
                ["style", "top", '0.05%'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1'],
                ["style", "left", '0.19%'],
                ["style", "display", 'block']
            ],
            "${_green}": [
                ["style", "top", '73.28%'],
                ["style", "height", '11.15%'],
                ["style", "left", '16.48%'],
                ["style", "width", '18.84%']
            ],
            "${symbolSelector}": [
                ["style", "height", '72.5%'],
                ["style", "width", '26.25%']
            ],
            "${_marun}": [
                ["style", "top", '58.62%'],
                ["style", "height", '11.15%'],
                ["style", "left", '15.48%'],
                ["style", "width", '18.84%']
            ],
            "${_gray}": [
                ["style", "height", '11.15%'],
                ["style", "top", '29.53%'],
                ["style", "left", '15.87%'],
                ["style", "width", '18.84%']
            ],
            "${_nevy_blue}": [
                ["style", "top", '51.89%'],
                ["style", "height", '11.15%'],
                ["style", "left", '39.68%'],
                ["style", "width", '18.84%']
            ],
            "${_forest_green}": [
                ["style", "top", '15.47%'],
                ["style", "height", '11.15%'],
                ["style", "left", '14.68%'],
                ["style", "width", '18.84%']
            ],
            "${_blue}": [
                ["style", "top", '29.53%'],
                ["style", "height", '11.15%'],
                ["style", "left", '65.08%'],
                ["style", "width", '18.84%']
            ],
            "${_gray3}": [
                ["style", "height", '11.15%'],
                ["style", "top", '58.62%'],
                ["style", "left", '65.08%'],
                ["style", "width", '18.84%']
            ],
            "${_white}": [
                ["style", "height", '11.15%'],
                ["style", "top", '72.63%'],
                ["style", "left", '65.87%'],
                ["style", "width", '18.84%']
            ],
            "${_gray2}": [
                ["style", "height", '11.15%'],
                ["style", "top", '43.53%'],
                ["style", "left", '64.68%'],
                ["style", "width", '18.84%']
            ],
            "${_brown}": [
                ["style", "height", '11.15%'],
                ["style", "top", '22.41%'],
                ["style", "left", '40.08%'],
                ["style", "width", '18.84%']
            ],
            "${_pink2}": [
                ["style", "top", '79.96%'],
                ["style", "height", '11.15%'],
                ["style", "left", '39.68%'],
                ["style", "width", '18.84%']
            ],
            "${_pink}": [
                ["style", "height", '11.15%'],
                ["style", "top", '65.73%'],
                ["style", "left", '40.08%'],
                ["style", "width", '18.84%']
            ],
            "${_sky_blue2}": [
                ["style", "top", '44.18%'],
                ["style", "height", '11.15%'],
                ["style", "left", '14.34%'],
                ["style", "width", '18.84%']
            ],
            "${_ALL_col}": [
                ["style", "height", '100.09%'],
                ["style", "top", '-0.03%'],
                ["style", "left", '0.04%'],
                ["style", "width", '99.85%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid99", tween: [ "style", "${_Group_colore}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid105", tween: [ "transform", "${_Group_colore}", "scaleY", '1.05', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid107", tween: [ "transform", "${_Group_colore}", "scaleY", '1', { fromValue: '1.05'}], position: 500, duration: 500 },
                { id: "eid104", tween: [ "transform", "${_Group_colore}", "scaleX", '1.05', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid106", tween: [ "transform", "${_Group_colore}", "scaleX", '1', { fromValue: '1.05'}], position: 500, duration: 500 }            ]
        }
    }
},
"Screen_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'block',
                    rect: ['3.3%', '3%', '34.4%', '97.1%', 'auto', 'auto'],
                    id: '_1',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['61.2%', '0%', '33.9%', '96.1%', 'auto', 'auto'],
                    id: '_2',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['1.9%', '1.2%', '35.1%', '97.6%', 'auto', 'auto'],
                    id: '_3',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['54.3%', '2.4%', '42.4%', '95.8%', 'auto', 'auto'],
                    id: '_4',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['0%', '1.2%', '38.5%', '97.3%', 'auto', 'auto'],
                    id: '_5',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['55.5%', '4.8%', '44.5%', '91.1%', 'auto', 'auto'],
                    id: '_6',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__1}": [
                ["style", "top", '2.98%'],
                ["style", "height", '97.14%'],
                ["style", "display", 'block'],
                ["style", "left", '3.29%'],
                ["style", "width", '34.41%']
            ],
            "${symbolSelector}": [
                ["style", "height", '52.5%'],
                ["style", "width", '69.8%']
            ],
            "${__4}": [
                ["style", "top", '2.39%'],
                ["style", "left", '54.33%'],
                ["style", "display", 'none']
            ],
            "${__3}": [
                ["style", "top", '1.18%'],
                ["style", "left", '1.94%'],
                ["style", "display", 'none']
            ],
            "${__6}": [
                ["style", "top", '4.77%'],
                ["style", "left", '55.52%'],
                ["style", "display", 'none']
            ],
            "${__2}": [
                ["style", "top", '0.01%'],
                ["style", "left", '61.19%'],
                ["style", "display", 'block']
            ],
            "${__5}": [
                ["style", "top", '1.18%'],
                ["style", "left", '-0.01%'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid37", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid24", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid33", tween: [ "style", "${__5}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid26", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid38", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid23", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid31", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid25", tween: [ "style", "${__6}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${__6}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid34", tween: [ "style", "${__6}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid22", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid32", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"Screen_sym_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'image',
                    display: 'none',
                    rect: ['3.3%', '3%', '34.4%', '97.1%', 'auto', 'auto'],
                    id: '_1',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_1.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['61.2%', '0%', '33.9%', '96.1%', 'auto', 'auto'],
                    id: '_2',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_2.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['1.9%', '1.2%', '35.1%', '97.6%', 'auto', 'auto'],
                    id: '_3',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_3.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'none',
                    rect: ['54.3%', '2.4%', '42.4%', '95.8%', 'auto', 'auto'],
                    id: '_4',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_4.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['0%', '1.2%', '38.5%', '97.3%', 'auto', 'auto'],
                    id: '_5',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_5.png', '0px', '0px']
                },
                {
                    type: 'image',
                    display: 'block',
                    rect: ['55.5%', '4.8%', '44.5%', '91.1%', 'auto', 'auto'],
                    id: '_6',
                    fill: ['rgba(0,0,0,0)', 'images/All_pictur/Pictur_6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__1}": [
                ["style", "top", '2.98%'],
                ["style", "display", 'none'],
                ["style", "height", '97.14%'],
                ["style", "left", '3.29%'],
                ["style", "width", '34.41%']
            ],
            "${__4}": [
                ["style", "top", '2.39%'],
                ["style", "left", '54.33%'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '52.5%'],
                ["style", "width", '69.8%']
            ],
            "${__3}": [
                ["style", "top", '1.18%'],
                ["style", "left", '1.94%'],
                ["style", "display", 'none']
            ],
            "${__2}": [
                ["style", "top", '0.01%'],
                ["style", "left", '61.19%'],
                ["style", "display", 'none']
            ],
            "${__6}": [
                ["style", "top", '4.77%'],
                ["style", "left", '55.52%'],
                ["style", "display", 'block']
            ],
            "${__5}": [
                ["style", "top", '1.18%'],
                ["style", "left", '-0.01%'],
                ["style", "display", 'block']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: true,
            timeline: [
                { id: "eid21", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid28", tween: [ "style", "${__2}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid37", tween: [ "style", "${__2}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid24", tween: [ "style", "${__5}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid36", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid33", tween: [ "style", "${__5}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid26", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid27", tween: [ "style", "${__1}", "display", 'none', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid38", tween: [ "style", "${__1}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid23", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid30", tween: [ "style", "${__4}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid31", tween: [ "style", "${__4}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
                { id: "eid25", tween: [ "style", "${__6}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid35", tween: [ "style", "${__6}", "display", 'none', { fromValue: 'block'}], position: 1000, duration: 0 },
                { id: "eid34", tween: [ "style", "${__6}", "display", 'none', { fromValue: 'none'}], position: 2000, duration: 0 },
                { id: "eid22", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid29", tween: [ "style", "${__3}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
                { id: "eid32", tween: [ "style", "${__3}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 }            ]
        }
    }
},
"shape": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: '_1',
                    type: 'image',
                    rect: ['16.9%', '87.2%', '66.9%', '12.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/1/2_1.png', '0px', '0px']
                },
                {
                    id: '_10',
                    type: 'image',
                    rect: ['20.3%', '69.1%', '60.1%', '16%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/10/2_10.png', '0px', '0px']
                },
                {
                    id: '_11',
                    type: 'image',
                    rect: ['27.7%', '46.9%', '45.3%', '19.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/11/2_11.png', '0px', '0px']
                },
                {
                    rect: ['154.3%', '53.3%', '252.3%', '46.3%', 'auto', 'auto'],
                    id: '_13',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/13/2_13.png', '0px', '0px']
                },
                {
                    rect: ['93.4%', '93.8%', '385.3%', '9.2%', 'auto', 'auto'],
                    id: '_14',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/14/2_14.png', '0px', '0px']
                },
                {
                    rect: ['140.7%', '63.9%', '247.1%', '32.7%', 'auto', 'auto'],
                    id: '_15',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/15/2_15.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__1}": [
                ["style", "top", '87.2%'],
                ["style", "height", '12.85%'],
                ["style", "left", '16.88%'],
                ["style", "width", '66.94%']
            ],
            "${__10}": [
                ["style", "top", '69.11%'],
                ["style", "height", '16.03%'],
                ["style", "left", '20.25%'],
                ["style", "width", '60.07%']
            ],
            "${__11}": [
                ["style", "top", '46.91%'],
                ["style", "height", '19.56%'],
                ["style", "left", '27.71%'],
                ["style", "width", '45.28%']
            ],
            "${__15}": [
                ["style", "top", '0.07%'],
                ["style", "display", 'block'],
                ["style", "height", '14.05%'],
                ["style", "left", '29.72%'],
                ["style", "width", '41.26%']
            ],
            "${symbolSelector}": [
                ["style", "height", '162.68%'],
                ["style", "width", '85.55%']
            ],
            "${__14}": [
                ["style", "top", '20.3%'],
                ["style", "display", 'block'],
                ["style", "height", '6.03%'],
                ["style", "left", '0.01%'],
                ["style", "width", '100.03%']
            ],
            "${__13}": [
                ["style", "top", '28.97%'],
                ["style", "display", 'block'],
                ["style", "height", '17.2%'],
                ["style", "left", '28.36%'],
                ["style", "width", '43.27%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid114", tween: [ "style", "${__13}", "left", '28.36%', { fromValue: '28.36%'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${__15}", "top", '0.07%', { fromValue: '0.07%'}], position: 0, duration: 0 },
                { id: "eid82", tween: [ "style", "${__13}", "height", '17.2%', { fromValue: '17.2%'}], position: 0, duration: 0 },
                { id: "eid113", tween: [ "style", "${__14}", "left", '0.01%', { fromValue: '0.01%'}], position: 0, duration: 0 },
                { id: "eid108", tween: [ "style", "${__15}", "width", '41.26%', { fromValue: '41.26%'}], position: 0, duration: 0 },
                { id: "eid60", tween: [ "style", "${__15}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid112", tween: [ "style", "${__15}", "left", '29.72%', { fromValue: '29.72%'}], position: 0, duration: 0 },
                { id: "eid103", tween: [ "style", "${__15}", "height", '14.05%', { fromValue: '14.05%'}], position: 0, duration: 0 },
                { id: "eid83", tween: [ "style", "${__13}", "width", '43.27%', { fromValue: '43.27%'}], position: 0, duration: 0 },
                { id: "eid58", tween: [ "style", "${__13}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid90", tween: [ "style", "${__14}", "height", '6.03%', { fromValue: '6.03%'}], position: 0, duration: 0 },
                { id: "eid93", tween: [ "style", "${__14}", "top", '20.3%', { fromValue: '20.3%'}], position: 0, duration: 0 },
                { id: "eid59", tween: [ "style", "${__14}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid91", tween: [ "style", "${__14}", "width", '100.03%', { fromValue: '100.03%'}], position: 0, duration: 0 },
                { id: "eid85", tween: [ "style", "${__13}", "top", '28.97%', { fromValue: '28.97%'}], position: 0, duration: 0 }            ]
        }
    }
},
"sym_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'show1',
                    type: 'image',
                    rect: ['-0.1%', '-17.4%', '3.4%', '134.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['0.1%', '8.7%', '2.7%', '82.6%', 'auto', 'auto'],
                    id: '_2_1Copy2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/1/2_1.png', '0px', '0px']
                },
                {
                    id: 'show2',
                    type: 'image',
                    rect: ['4.9%', '-13%', '3.4%', '134.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['5.1%', '10.7%', '2.8%', '73.9%', 'auto', 'auto'],
                    id: '_2_10Copy2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/10/2_10.png', '0px', '0px']
                },
                {
                    id: 'show3',
                    type: 'image',
                    rect: ['10.2%', '-13%', '3%', '134.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['10.4%', '13%', '2.6%', '73.9%', 'auto', 'auto'],
                    id: '_2_11Copy2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/11/2_11.png', '0px', '0px']
                },
                {
                    id: 'show4',
                    type: 'image',
                    rect: ['15.2%', '-13%', '3.8%', '134.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['15.9%', '8.7%', '2.7%', '95.7%', 'auto', 'auto'],
                    id: '_2_13Copy2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/13/2_13.png', '0px', '0px']
                },
                {
                    id: 'show5',
                    type: 'image',
                    rect: ['20.6%', '-17.4%', '2.7%', '134.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['20.7%', '30.4%', '2.8%', '39.1%', 'auto', 'auto'],
                    id: '_2_14Copy2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/14/2_14.png', '0px', '0px']
                },
                {
                    rect: ['24.8%', '-17.4%', '3.8%', '134.8%', 'auto', 'auto'],
                    id: 'show6',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['25.4%', '17.4%', '3.1%', '70%', 'auto', 'auto'],
                    id: '_2_15Copy2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/15/2_15.png', '0px', '0px']
                },
                {
                    rect: ['30.5%', '-11.4%', '2.8%', '134.8%', 'auto', 'auto'],
                    id: 'show7',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['30.5%', '30.4%', '2.8%', '52.2%', 'auto', 'auto'],
                    id: '_2_16Copy2',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/16/2_16.png', '0px', '0px']
                },
                {
                    rect: ['35.9%', '-19%', '2.8%', '134.8%', 'auto', 'auto'],
                    id: 'show8',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['-7%', '-268.8%', '6.4%', '100.3%', 'auto', 'auto'],
                    id: '_2_12Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/12/2_12.png', '0px', '0px']
                },
                {
                    rect: ['40.1%', '-13%', '3.6%', '127.5%', 'auto', 'auto'],
                    id: 'show9',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['17.3%', '-96.5%', '11%', '139.7%', 'auto', 'auto'],
                    id: '_2_2Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/2/2_2.png', '0px', '0px']
                },
                {
                    rect: ['45%', '-4.3%', '2.9%', '106.8%', 'auto', 'auto'],
                    id: 'show10',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['7.7%', '-183.1%', '3.6%', '225.9%', 'auto', 'auto'],
                    id: '_2_3Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/3/2_3.png', '0px', '0px']
                },
                {
                    rect: ['50.2%', '-34.8%', '3.8%', '134.8%', 'auto', 'auto'],
                    id: 'show11',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['-2.1%', '-146%', '7%', '183.6%', 'auto', 'auto'],
                    id: '_2_4Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/4/2_4.png', '0px', '0px']
                },
                {
                    rect: ['57.4%', '-8.7%', '2.8%', '117.4%', 'auto', 'auto'],
                    id: 'show12',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['22.5%', '-153.7%', '9.1%', '72.9%', 'auto', 'auto'],
                    id: '_2_6Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/6/2_6.png', '0px', '0px']
                },
                {
                    rect: ['61%', '-6.8%', '2.8%', '117.4%', 'auto', 'auto'],
                    id: 'show13',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['-3.1%', '-171%', '3%', '17.7%', 'auto', 'auto'],
                    id: '_2_7Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/7/2_7.png', '0px', '0px']
                },
                {
                    rect: ['67.5%', '-10.8%', '2.8%', '117.4%', 'auto', 'auto'],
                    id: 'show14',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['-2.8%', '-155.7%', '3%', '10.9%', 'auto', 'auto'],
                    id: '_2_8Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/8/2_8.png', '0px', '0px']
                },
                {
                    rect: ['72.6%', '-10%', '2.8%', '117.4%', 'auto', 'auto'],
                    id: 'show15',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['9.4%', '-205.6%', '1.8%', '24.2%', 'auto', 'auto'],
                    id: '_2_9Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/9/2_9.png', '0px', '0px']
                },
                {
                    rect: ['77.4%', '-13%', '3%', '120%', 'auto', 'auto'],
                    id: 'show16',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['23.2%', '-141.6%', '7.3%', '52%', 'auto', 'auto'],
                    id: '_2_5Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/5/2_5.png', '0px', '0px']
                },
                {
                    rect: ['82.1%', '-8.7%', '3%', '120%', 'auto', 'auto'],
                    id: 'show17',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['14.3%', '-169%', '6.5%', '26.6%', 'auto', 'auto'],
                    id: '_2_19Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/19/2_19.png', '0px', '0px']
                },
                {
                    rect: ['87.5%', '-11.1%', '2.8%', '117.4%', 'auto', 'auto'],
                    id: 'show18',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['15%', '-192.3%', '3.3%', '16.5%', 'auto', 'auto'],
                    id: '_2_17Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/17/2_17.png', '0px', '0px']
                },
                {
                    rect: ['92.2%', '-14.4%', '2.8%', '117.4%', 'auto', 'auto'],
                    id: 'show19',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['15.3%', '-165.7%', '2.8%', '16.5%', 'auto', 'auto'],
                    id: '_2_20Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/20/2_20.png', '0px', '0px']
                },
                {
                    rect: ['97%', '0.9%', '2.1%', '95.7%', 'auto', 'auto'],
                    id: 'show20',
                    transform: [[0, 0], ['-1']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['15.3%', '-189.5%', '1.8%', '12.1%', 'auto', 'auto'],
                    id: '_2_18Copy',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/2/18/2_18.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__2_8Copy}": [
                ["style", "top", '30.43%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '34.78%'],
                ["style", "display", 'block'],
                ["style", "left", '67.79%'],
                ["style", "width", '1.72%']
            ],
            "${__2_19Copy}": [
                ["style", "top", '34.78%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '30.43%'],
                ["style", "display", 'block'],
                ["style", "left", '82.71%'],
                ["style", "width", '2.82%']
            ],
            "${__2_4Copy}": [
                ["style", "top", '8.7%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '73.91%'],
                ["style", "display", 'block'],
                ["style", "left", '51.63%'],
                ["style", "width", '2.8%']
            ],
            "${_show6}": [
                ["style", "top", '-17.39%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '134.78%'],
                ["style", "left", '24.81%'],
                ["style", "width", '3.83%']
            ],
            "${_show19}": [
                ["style", "top", '-14.36%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '117.39%'],
                ["style", "left", '92.23%'],
                ["style", "width", '2.76%']
            ],
            "${__2_9Copy}": [
                ["style", "top", '20.85%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '52.17%'],
                ["style", "display", 'block'],
                ["style", "left", '73.31%'],
                ["style", "width", '1.45%']
            ],
            "${__2_16Copy2}": [
                ["style", "top", '30.43%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '52.17%'],
                ["style", "overflow", 'visible'],
                ["style", "left", '30.45%'],
                ["style", "width", '2.77%']
            ],
            "${__2_17Copy}": [
                ["style", "top", '26.09%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '44.06%'],
                ["style", "display", 'block'],
                ["style", "left", '87.72%'],
                ["style", "width", '2.11%']
            ],
            "${__2_18Copy}": [
                ["style", "top", '30.43%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "display", 'block'],
                ["style", "height", '32.18%'],
                ["style", "left", '97.12%'],
                ["style", "width", '1.79%']
            ],
            "${__2_11Copy2}": [
                ["style", "top", '13.04%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '73.91%'],
                ["style", "overflow", 'visible'],
                ["style", "left", '10.4%'],
                ["style", "width", '2.57%']
            ],
            "${_show17}": [
                ["style", "top", '-8.7%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '120%'],
                ["style", "left", '82.58%'],
                ["style", "width", '2.96%']
            ],
            "${_show13}": [
                ["style", "top", '-6.83%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '117.39%'],
                ["style", "left", '62.41%'],
                ["style", "width", '2.76%']
            ],
            "${__2_13Copy2}": [
                ["style", "top", '8.7%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '95.65%'],
                ["style", "overflow", 'visible'],
                ["style", "left", '15.85%'],
                ["style", "width", '2.7%']
            ],
            "${_show5}": [
                ["style", "top", '-17.39%'],
                ["style", "height", '134.78%'],
                ["style", "left", '20.55%'],
                ["style", "width", '2.71%']
            ],
            "${_show4}": [
                ["style", "height", '134.78%'],
                ["style", "top", '-13.04%'],
                ["style", "left", '15.22%'],
                ["style", "width", '3.83%']
            ],
            "${__2_3Copy}": [
                ["style", "top", '21.74%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '59.77%'],
                ["style", "display", 'block'],
                ["style", "left", '46.62%'],
                ["style", "width", '1.79%']
            ],
            "${__2_6Copy}": [
                ["style", "top", '28.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '43.48%'],
                ["style", "display", 'block'],
                ["style", "left", '57.64%'],
                ["style", "width", '2.38%']
            ],
            "${_show20}": [
                ["style", "top", '0.86%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '95.65%'],
                ["style", "left", '96.99%'],
                ["style", "width", '2.14%']
            ],
            "${_show3}": [
                ["style", "top", '-13.04%'],
                ["style", "height", '134.78%'],
                ["style", "left", '10.15%'],
                ["style", "width", '3%']
            ],
            "${__2_20Copy}": [
                ["style", "top", '26.09%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '43.48%'],
                ["style", "display", 'block'],
                ["style", "left", '92.61%'],
                ["style", "width", '2.01%']
            ],
            "${_show15}": [
                ["style", "top", '-10.04%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '117.39%'],
                ["style", "left", '72.56%'],
                ["style", "width", '2.76%']
            ],
            "${symbolSelector}": [
                ["style", "height", '24.83%'],
                ["style", "width", '244.78%']
            ],
            "${__2_12Copy}": [
                ["style", "top", '13.38%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '69.57%'],
                ["style", "display", 'block'],
                ["style", "left", '35.21%'],
                ["style", "width", '2.82%']
            ],
            "${_show11}": [
                ["style", "top", '-17.39%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '134.78%'],
                ["style", "left", '51.13%'],
                ["style", "width", '3.83%']
            ],
            "${_show8}": [
                ["style", "top", '-19%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '134.78%'],
                ["style", "left", '35.21%'],
                ["style", "width", '2.76%']
            ],
            "${_show18}": [
                ["style", "top", '-11.13%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '117.39%'],
                ["style", "left", '87.47%'],
                ["style", "width", '2.76%']
            ],
            "${__2_15Copy2}": [
                ["style", "top", '17.39%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '70%'],
                ["style", "overflow", 'visible'],
                ["style", "left", '25.44%'],
                ["style", "width", '3.11%']
            ],
            "${_show9}": [
                ["style", "top", '-13.04%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '127.52%'],
                ["style", "left", '40.06%'],
                ["style", "width", '3.6%']
            ],
            "${_show10}": [
                ["style", "top", '-4.35%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '106.78%'],
                ["style", "left", '45.99%'],
                ["style", "width", '2.9%']
            ],
            "${_show14}": [
                ["style", "top", '-10.82%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '117.39%'],
                ["style", "left", '67.29%'],
                ["style", "width", '2.76%']
            ],
            "${_show12}": [
                ["style", "top", '-8.7%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '117.39%'],
                ["style", "left", '57.39%'],
                ["style", "width", '2.76%']
            ],
            "${_show16}": [
                ["style", "top", '-13.04%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '120%'],
                ["style", "left", '77.44%'],
                ["style", "width", '2.96%']
            ],
            "${__2_2Copy}": [
                ["style", "top", '13.04%'],
                ["transform", "rotateZ", '80deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '65.22%'],
                ["style", "display", 'block'],
                ["style", "left", '40.6%'],
                ["style", "width", '2.76%']
            ],
            "${_show7}": [
                ["style", "top", '-11.41%'],
                ["transform", "rotateZ", '-1deg'],
                ["style", "height", '134.78%'],
                ["style", "left", '30.45%'],
                ["style", "width", '2.76%']
            ],
            "${__2_1Copy2}": [
                ["style", "top", '8.7%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '82.61%'],
                ["style", "overflow", 'visible'],
                ["style", "left", '0.13%'],
                ["style", "width", '2.66%']
            ],
            "${__2_14Copy2}": [
                ["style", "top", '30.43%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '39.13%'],
                ["style", "overflow", 'visible'],
                ["style", "left", '20.68%'],
                ["style", "width", '2.83%']
            ],
            "${__2_10Copy2}": [
                ["style", "top", '10.73%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '73.91%'],
                ["style", "overflow", 'visible'],
                ["style", "left", '5.14%'],
                ["style", "width", '2.82%']
            ],
            "${__2_7Copy}": [
                ["style", "top", '39.13%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '30.43%'],
                ["style", "display", 'block'],
                ["style", "left", '62.85%'],
                ["style", "width", '2.07%']
            ],
            "${__2_5Copy}": [
                ["style", "top", '30.43%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "overflow", 'visible'],
                ["style", "height", '39.13%'],
                ["style", "display", 'block'],
                ["style", "left", '77.69%'],
                ["style", "width", '2.45%']
            ],
            "${_show1}": [
                ["style", "top", '-17.39%'],
                ["style", "height", '134.78%'],
                ["style", "left", '-0.13%'],
                ["style", "width", '3.39%']
            ],
            "${_show2}": [
                ["style", "height", '134.78%'],
                ["style", "top", '-13.04%'],
                ["style", "left", '4.89%'],
                ["style", "width", '3.39%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
                { id: "eid719", tween: [ "style", "${_show13}", "left", '62.41%', { fromValue: '62.41%'}], position: 0, duration: 0 },
                { id: "eid715", tween: [ "style", "${__2_8Copy}", "width", '1.72%', { fromValue: '1.72%'}], position: 0, duration: 0 },
                { id: "eid220", tween: [ "transform", "${__2_19Copy}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
                { id: "eid72", tween: [ "style", "${__2_20Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid697", tween: [ "style", "${__2_18Copy}", "left", '97.12%', { fromValue: '97.12%'}], position: 0, duration: 0 },
                { id: "eid68", tween: [ "style", "${__2_9Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid734", tween: [ "style", "${__2_4Copy}", "left", '51.63%', { fromValue: '51.63%'}], position: 0, duration: 0 },
                { id: "eid218", tween: [ "transform", "${__2_5Copy}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
                { id: "eid746", tween: [ "style", "${__2_12Copy}", "top", '13.38%', { fromValue: '13.38%'}], position: 0, duration: 0 },
                { id: "eid71", tween: [ "style", "${__2_17Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid756", tween: [ "style", "${__2_5Copy}", "width", '2.45%', { fromValue: '2.45%'}], position: 0, duration: 0 },
                { id: "eid690", tween: [ "style", "${__2_20Copy}", "height", '43.48%', { fromValue: '43.48%'}], position: 0, duration: 0 },
                { id: "eid639", tween: [ "style", "${__2_2Copy}", "top", '13.04%', { fromValue: '13.04%'}], position: 0, duration: 0 },
                { id: "eid699", tween: [ "style", "${__2_20Copy}", "left", '92.61%', { fromValue: '92.61%'}], position: 0, duration: 0 },
                { id: "eid703", tween: [ "style", "${__2_19Copy}", "left", '82.71%', { fromValue: '82.71%'}], position: 0, duration: 0 },
                { id: "eid670", tween: [ "style", "${__2_6Copy}", "top", '28.67%', { fromValue: '28.67%'}], position: 0, duration: 0 },
                { id: "eid69", tween: [ "style", "${__2_5Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid630", tween: [ "style", "${_show8}", "left", '35.21%', { fromValue: '35.21%'}], position: 0, duration: 0 },
                { id: "eid723", tween: [ "style", "${__2_6Copy}", "left", '57.64%', { fromValue: '57.64%'}], position: 0, duration: 0 },
                { id: "eid685", tween: [ "style", "${__2_19Copy}", "top", '34.78%', { fromValue: '34.78%'}], position: 0, duration: 0 },
                { id: "eid717", tween: [ "style", "${__2_8Copy}", "top", '30.43%', { fromValue: '30.43%'}], position: 0, duration: 0 },
                { id: "eid224", tween: [ "transform", "${__2_7Copy}", "rotateZ", '90deg', { fromValue: '90deg'}], position: 0, duration: 0 },
                { id: "eid635", tween: [ "style", "${__2_2Copy}", "height", '65.22%', { fromValue: '65.22%'}], position: 0, duration: 0 },
                { id: "eid721", tween: [ "style", "${_show14}", "left", '67.29%', { fromValue: '67.29%'}], position: 0, duration: 0 },
                { id: "eid440", tween: [ "style", "${__2_17Copy}", "top", '26.09%', { fromValue: '26.09%'}], position: 0, duration: 0 },
                { id: "eid637", tween: [ "style", "${__2_2Copy}", "left", '40.6%', { fromValue: '40.6%'}], position: 0, duration: 0 },
                { id: "eid747", tween: [ "style", "${__2_12Copy}", "left", '35.21%', { fromValue: '35.21%'}], position: 0, duration: 0 },
                { id: "eid64", tween: [ "style", "${__2_4Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid634", tween: [ "transform", "${__2_2Copy}", "rotateZ", '80deg', { fromValue: '80deg'}], position: 0, duration: 0 },
                { id: "eid720", tween: [ "style", "${__2_8Copy}", "left", '67.79%', { fromValue: '67.79%'}], position: 0, duration: 0 },
                { id: "eid430", tween: [ "style", "${__2_18Copy}", "top", '30.43%', { fromValue: '30.43%'}], position: 0, duration: 0 },
                { id: "eid676", tween: [ "style", "${__2_5Copy}", "height", '39.13%', { fromValue: '39.13%'}], position: 0, duration: 0 },
                { id: "eid57", tween: [ "style", "${__2_12Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid445", tween: [ "style", "${__2_9Copy}", "height", '52.17%', { fromValue: '52.17%'}], position: 0, duration: 0 },
                { id: "eid737", tween: [ "style", "${_show11}", "top", '-17.39%', { fromValue: '-17.39%'}], position: 0, duration: 0 },
                { id: "eid749", tween: [ "style", "${__2_4Copy}", "top", '8.7%', { fromValue: '8.7%'}], position: 0, duration: 0 },
                { id: "eid651", tween: [ "style", "${__2_4Copy}", "width", '2.8%', { fromValue: '2.8%'}], position: 0, duration: 0 },
                { id: "eid73", tween: [ "style", "${__2_18Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid448", tween: [ "style", "${__2_9Copy}", "width", '1.45%', { fromValue: '1.45%'}], position: 0, duration: 0 },
                { id: "eid66", tween: [ "style", "${__2_7Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid446", tween: [ "style", "${__2_9Copy}", "top", '20.85%', { fromValue: '20.85%'}], position: 0, duration: 0 },
                { id: "eid458", tween: [ "style", "${__2_7Copy}", "height", '30.43%', { fromValue: '30.43%'}], position: 0, duration: 0 },
                { id: "eid694", tween: [ "style", "${__2_20Copy}", "top", '26.09%', { fromValue: '26.09%'}], position: 0, duration: 0 },
                { id: "eid681", tween: [ "style", "${__2_19Copy}", "height", '30.43%', { fromValue: '30.43%'}], position: 0, duration: 0 },
                { id: "eid65", tween: [ "style", "${__2_6Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid70", tween: [ "style", "${__2_19Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid684", tween: [ "style", "${__2_19Copy}", "width", '2.82%', { fromValue: '2.82%'}], position: 0, duration: 0 },
                { id: "eid757", tween: [ "style", "${__2_5Copy}", "top", '30.43%', { fromValue: '30.43%'}], position: 0, duration: 0 },
                { id: "eid753", tween: [ "style", "${__2_7Copy}", "top", '39.13%', { fromValue: '39.13%'}], position: 0, duration: 0 },
                { id: "eid701", tween: [ "style", "${__2_17Copy}", "left", '87.72%', { fromValue: '87.72%'}], position: 0, duration: 0 },
                { id: "eid665", tween: [ "style", "${__2_6Copy}", "height", '43.48%', { fromValue: '43.48%'}], position: 0, duration: 0 },
                { id: "eid706", tween: [ "style", "${__2_9Copy}", "left", '73.31%', { fromValue: '73.31%'}], position: 0, duration: 0 },
                { id: "eid693", tween: [ "style", "${__2_20Copy}", "width", '2.01%', { fromValue: '2.01%'}], position: 0, duration: 0 },
                { id: "eid735", tween: [ "style", "${_show11}", "left", '51.13%', { fromValue: '51.13%'}], position: 0, duration: 0 },
                { id: "eid63", tween: [ "style", "${__2_3Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid752", tween: [ "style", "${__2_7Copy}", "width", '2.07%', { fromValue: '2.07%'}], position: 0, duration: 0 },
                { id: "eid732", tween: [ "style", "${__2_3Copy}", "left", '46.62%', { fromValue: '46.62%'}], position: 0, duration: 0 },
                { id: "eid755", tween: [ "style", "${__2_5Copy}", "left", '77.69%', { fromValue: '77.69%'}], position: 0, duration: 0 },
                { id: "eid708", tween: [ "style", "${__2_8Copy}", "height", '34.78%', { fromValue: '34.78%'}], position: 0, duration: 0 },
                { id: "eid638", tween: [ "style", "${__2_2Copy}", "width", '2.76%', { fromValue: '2.76%'}], position: 0, duration: 0 },
                { id: "eid733", tween: [ "style", "${_show10}", "left", '45.99%', { fromValue: '45.99%'}], position: 0, duration: 0 },
                { id: "eid702", tween: [ "style", "${_show17}", "left", '82.58%', { fromValue: '82.58%'}], position: 0, duration: 0 },
                { id: "eid61", tween: [ "style", "${__2_2Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid748", tween: [ "style", "${__2_12Copy}", "width", '2.82%', { fromValue: '2.82%'}], position: 0, duration: 0 },
                { id: "eid67", tween: [ "style", "${__2_8Copy}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid662", tween: [ "style", "${__2_4Copy}", "height", '73.91%', { fromValue: '73.91%'}], position: 0, duration: 0 },
                { id: "eid751", tween: [ "style", "${__2_7Copy}", "left", '62.85%', { fromValue: '62.85%'}], position: 0, duration: 0 },
                { id: "eid668", tween: [ "style", "${__2_6Copy}", "width", '2.38%', { fromValue: '2.38%'}], position: 0, duration: 0 }            ]
        }
    }
},
"Ani_6": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'show22',
                    type: 'image',
                    rect: ['0.4%', '-37.9%', '4.1%', '178.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_1Copy',
                    type: 'image',
                    rect: ['0.4%', '-17.9%', '4%', '135.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/1/6_1.png', '0px', '0px']
                },
                {
                    id: 'show22Copy',
                    type: 'image',
                    rect: ['6.5%', '-37.9%', '4.5%', '178.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_13Copy',
                    type: 'image',
                    rect: ['6.9%', '-25%', '3.8%', '139.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/13/6_13.png', '0px', '0px']
                },
                {
                    id: 'show22Copy2',
                    type: 'image',
                    rect: ['13.2%', '-37.9%', '4.5%', '178.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_6Copy',
                    type: 'image',
                    rect: ['13.1%', '-21.4%', '4%', '139.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/6/6_6.png', '0px', '0px']
                },
                {
                    id: 'show22Copy3',
                    type: 'image',
                    rect: ['20.1%', '-34.5%', '4.5%', '175%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_12Copy',
                    type: 'image',
                    rect: ['20.5%', '0%', '3.5%', '110.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/12/6_12.png', '0px', '0px']
                },
                {
                    id: 'show22Copy4',
                    type: 'image',
                    rect: ['26.9%', '-28.6%', '4.1%', '164.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_14Copy',
                    type: 'image',
                    rect: ['27.4%', '10.7%', '2.9%', '85.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/14/6_14.png', '0px', '0px']
                },
                {
                    id: 'show22Copy5',
                    type: 'image',
                    rect: ['33.3%', '-31%', '3.6%', '164.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_15Copy',
                    type: 'image',
                    rect: ['33.8%', '7.1%', '2.6%', '82.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/15/6_15.png', '0px', '0px']
                },
                {
                    id: 'show22Copy6',
                    type: 'image',
                    rect: ['39%', '-40.5%', '4.5%', '189.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_16Copy',
                    type: 'image',
                    rect: ['39.1%', '-14.3%', '4.4%', '132.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/16/6_16.png', '0px', '0px']
                },
                {
                    id: 'show22Copy7',
                    type: 'image',
                    rect: ['45.9%', '-31%', '3.6%', '164.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_17Copy',
                    type: 'image',
                    rect: ['45.7%', '7.1%', '4%', '85.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/17/6_17.png', '0px', '0px']
                },
                {
                    id: 'show22Copy8',
                    type: 'image',
                    rect: ['51.8%', '-34.5%', '3.6%', '171.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_18Copy',
                    type: 'image',
                    rect: ['51.6%', '0%', '3.5%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/18/6_18.png', '0px', '0px']
                },
                {
                    id: 'show22Copy9',
                    type: 'image',
                    rect: ['57.6%', '-31%', '3.1%', '167.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_2Copy',
                    type: 'image',
                    rect: ['57.5%', '16.5%', '3.1%', '53.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/2/6_2.png', '0px', '0px']
                },
                {
                    id: 'show22Copy10',
                    type: 'image',
                    rect: ['62.9%', '-32.8%', '2.6%', '164.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_3Copy',
                    type: 'image',
                    rect: ['62.6%', '22.8%', '3.1%', '42.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/3/6_3.png', '0px', '0px']
                },
                {
                    id: 'show22Copy11',
                    type: 'image',
                    rect: ['67.7%', '-31%', '3.1%', '164.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_4Copy',
                    type: 'image',
                    rect: ['67.6%', '7.1%', '3.2%', '85.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/4/6_4.png', '0px', '0px']
                },
                {
                    id: 'show22Copy12',
                    type: 'image',
                    rect: ['73.1%', '-34.5%', '3.1%', '167.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_5Copy',
                    type: 'image',
                    rect: ['73.4%', '3.6%', '2.7%', '92.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/5/6_5.png', '0px', '0px']
                },
                {
                    id: 'show22Copy13',
                    type: 'image',
                    rect: ['78.3%', '-27.6%', '2.6%', '164.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_8Copy',
                    type: 'image',
                    rect: ['78%', '25%', '3.1%', '60.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/8/6_8.png', '0px', '0px']
                },
                {
                    id: 'show22Copy14',
                    type: 'image',
                    rect: ['82.8%', '-27.6%', '3.1%', '167.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_7Copy',
                    type: 'image',
                    rect: ['82.6%', '21.4%', '3.3%', '60.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/7/6_7.png', '0px', '0px']
                },
                {
                    id: 'show22Copy15',
                    type: 'image',
                    rect: ['87.9%', '-28.6%', '3.1%', '167.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_19Copy',
                    type: 'image',
                    rect: ['88%', '24.1%', '2.6%', '63.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/19/6_19.png', '0px', '0px']
                },
                {
                    id: 'show22Copy17',
                    type: 'image',
                    rect: ['92.9%', '-27.6%', '2.6%', '167.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_10Copy',
                    type: 'image',
                    rect: ['92.8%', '37.9%', '3.1%', '44.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/10/6_10.png', '0px', '0px']
                },
                {
                    id: 'show22Copy16',
                    type: 'image',
                    rect: ['97.2%', '-31%', '2.8%', '167.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_6_11Copy',
                    type: 'image',
                    rect: ['97.2%', '23.9%', '2.8%', '58.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/6/11/6_11.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_show22Copy10}": [
                ["style", "top", '-32.75%'],
                ["style", "height", '164.29%'],
                ["style", "left", '62.87%'],
                ["style", "width", '2.61%']
            ],
            "${__6_7Copy}": [
                ["style", "top", '21.43%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '60.71%'],
                ["style", "left", '82.64%'],
                ["style", "width", '3.33%']
            ],
            "${_show22Copy3}": [
                ["style", "height", '175%'],
                ["style", "top", '-34.48%'],
                ["style", "left", '20.06%'],
                ["style", "width", '4.54%']
            ],
            "${__6_17Copy}": [
                ["style", "top", '7.14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '85.71%'],
                ["style", "left", '45.71%'],
                ["style", "width", '4%']
            ],
            "${__6_5Copy}": [
                ["style", "top", '3.57%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '92.86%'],
                ["style", "left", '73.38%'],
                ["style", "width", '2.7%']
            ],
            "${__6_16Copy}": [
                ["style", "top", '-14.29%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '132.14%'],
                ["style", "left", '39.05%'],
                ["style", "width", '4.35%']
            ],
            "${_show22Copy9}": [
                ["style", "height", '167.86%'],
                ["style", "top", '-31.03%'],
                ["style", "left", '57.57%'],
                ["style", "width", '3.09%']
            ],
            "${_show22Copy8}": [
                ["style", "top", '-34.48%'],
                ["style", "height", '171.43%'],
                ["style", "left", '51.78%'],
                ["style", "width", '3.57%']
            ],
            "${__6_10Copy}": [
                ["style", "top", '37.93%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '44.83%'],
                ["style", "left", '92.77%'],
                ["style", "width", '3.14%']
            ],
            "${__6_4Copy}": [
                ["style", "top", '7.14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '85.71%'],
                ["style", "left", '67.6%'],
                ["style", "width", '3.24%']
            ],
            "${__6_3Copy}": [
                ["style", "top", '22.79%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.86%'],
                ["style", "left", '62.58%'],
                ["style", "width", '3.13%']
            ],
            "${_show22Copy2}": [
                ["style", "top", '-37.93%'],
                ["style", "height", '178.57%'],
                ["style", "left", '13.21%'],
                ["style", "width", '4.54%']
            ],
            "${__6_13Copy}": [
                ["style", "top", '-25%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '139.29%'],
                ["style", "left", '6.94%'],
                ["style", "width", '3.77%']
            ],
            "${_show22Copy5}": [
                ["style", "height", '164.29%'],
                ["style", "top", '-31.03%'],
                ["style", "left", '33.27%'],
                ["style", "width", '3.57%']
            ],
            "${_show22Copy7}": [
                ["style", "top", '-31.03%'],
                ["style", "height", '164.29%'],
                ["style", "left", '45.9%'],
                ["style", "width", '3.57%']
            ],
            "${__6_19Copy}": [
                ["style", "top", '24.14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '63.62%'],
                ["style", "left", '87.95%'],
                ["style", "width", '2.59%']
            ],
            "${_show22Copy17}": [
                ["style", "height", '167.86%'],
                ["style", "top", '-27.59%'],
                ["style", "left", '92.86%'],
                ["style", "width", '2.61%']
            ],
            "${symbolSelector}": [
                ["style", "height", '30.7%'],
                ["style", "width", '308.59%']
            ],
            "${__6_1Copy}": [
                ["style", "top", '-17.86%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '135.71%'],
                ["style", "left", '0.39%'],
                ["style", "width", '3.96%']
            ],
            "${__6_11Copy}": [
                ["style", "top", '23.87%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '58.62%'],
                ["style", "left", '97.2%'],
                ["style", "width", '2.84%']
            ],
            "${_show22Copy11}": [
                ["style", "top", '-31.03%'],
                ["style", "height", '164.29%'],
                ["style", "left", '67.7%'],
                ["style", "width", '3.09%']
            ],
            "${_show22Copy4}": [
                ["style", "top", '-28.57%'],
                ["style", "height", '164.29%'],
                ["style", "left", '26.9%'],
                ["style", "width", '4.06%']
            ],
            "${__6_12Copy}": [
                ["style", "top", '0%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '110.71%'],
                ["style", "left", '20.54%'],
                ["style", "width", '3.48%']
            ],
            "${_show22Copy6}": [
                ["style", "top", '-40.52%'],
                ["style", "height", '189.29%'],
                ["style", "left", '38.96%'],
                ["style", "width", '4.54%']
            ],
            "${__6_15Copy}": [
                ["style", "top", '7.14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '82.14%'],
                ["style", "left", '33.75%'],
                ["style", "width", '2.61%']
            ],
            "${__6_2Copy}": [
                ["style", "top", '16.46%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '53.57%'],
                ["style", "left", '57.47%'],
                ["style", "width", '3.09%']
            ],
            "${_show22Copy12}": [
                ["style", "height", '167.86%'],
                ["style", "top", '-34.48%'],
                ["style", "left", '73.1%'],
                ["style", "width", '3.09%']
            ],
            "${__6_6Copy}": [
                ["style", "top", '-21.43%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '139.29%'],
                ["style", "left", '13.11%'],
                ["style", "width", '3.97%']
            ],
            "${_show22Copy13}": [
                ["style", "height", '164.29%'],
                ["style", "top", '-27.59%'],
                ["style", "left", '78.3%'],
                ["style", "width", '2.61%']
            ],
            "${__6_8Copy}": [
                ["style", "top", '25%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '60.71%'],
                ["style", "left", '78.01%'],
                ["style", "width", '3.14%']
            ],
            "${_show22Copy15}": [
                ["style", "top", '-28.57%'],
                ["style", "height", '167.86%'],
                ["style", "left", '87.85%'],
                ["style", "width", '3.09%']
            ],
            "${_show22Copy14}": [
                ["style", "height", '167.86%'],
                ["style", "top", '-27.59%'],
                ["style", "left", '82.84%'],
                ["style", "width", '3.09%']
            ],
            "${_show22}": [
                ["style", "height", '178.57%'],
                ["style", "top", '-37.93%'],
                ["style", "left", '0.39%'],
                ["style", "width", '4.06%']
            ],
            "${__6_14Copy}": [
                ["style", "top", '10.71%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '85.71%'],
                ["style", "left", '27.39%'],
                ["style", "width", '2.93%']
            ],
            "${_show22Copy16}": [
                ["style", "top", '-31.03%'],
                ["style", "height", '167.86%'],
                ["style", "left", '97.23%'],
                ["style", "width", '2.8%']
            ],
            "${_show22Copy}": [
                ["style", "top", '-37.93%'],
                ["style", "height", '178.57%'],
                ["style", "left", '6.46%'],
                ["style", "width", '4.54%']
            ],
            "${__6_18Copy}": [
                ["style", "top", '0%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '100%'],
                ["style", "left", '51.59%'],
                ["style", "width", '3.51%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Ani_3": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'show23',
                    type: 'image',
                    rect: ['0%', '8%', '1.8%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['0.2%', '29.3%', '1.2%', '50%', 'auto', 'auto'],
                    id: '_3_11Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/11/3_11.png', '0px', '0px']
                },
                {
                    id: 'show23Copy',
                    type: 'image',
                    rect: ['2.7%', '8%', '1.8%', '86%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['3%', '20%', '1.3%', '62.7%', 'auto', 'auto'],
                    id: '_3_12Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/12/3_12.png', '0px', '0px']
                },
                {
                    id: 'show23Copy2',
                    type: 'image',
                    rect: ['5.4%', '5.3%', '1.8%', '86%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['5.6%', '18.7%', '1.5%', '64%', 'auto', 'auto'],
                    id: '_3_13Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/13/3_13.png', '0px', '0px']
                },
                {
                    id: 'show23Copy3',
                    type: 'image',
                    rect: ['8.1%', '6.7%', '1.8%', '86%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['8.3%', '18.7%', '1.5%', '62.7%', 'auto', 'auto'],
                    id: '_3_14Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/14/3_14.png', '0px', '0px']
                },
                {
                    id: 'show23Copy4',
                    type: 'image',
                    rect: ['10.8%', '5.3%', '1.8%', '86%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['11%', '20%', '1.4%', '52.4%', 'auto', 'auto'],
                    id: '_3_10Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/10/3_10.png', '0px', '0px']
                },
                {
                    id: 'show23Copy5',
                    type: 'image',
                    rect: ['13.7%', '4%', '1.8%', '86%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['13.9%', '22.7%', '1.3%', '49.3%', 'auto', 'auto'],
                    id: '_3_16Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/16/3_16.png', '0px', '0px']
                },
                {
                    id: 'show23Copy6',
                    type: 'image',
                    rect: ['16.5%', '5.3%', '1.8%', '86%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['16.6%', '24%', '1.5%', '49.3%', 'auto', 'auto'],
                    id: '_3_15Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/15/3_15.png', '0px', '0px']
                },
                {
                    id: 'show23Copy7',
                    type: 'image',
                    rect: ['19.4%', '5.3%', '2.4%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['19.8%', '14.7%', '1.5%', '69.3%', 'auto', 'auto'],
                    id: '_3_17Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/17/3_17.png', '0px', '0px']
                },
                {
                    id: 'show23Copy8',
                    type: 'image',
                    rect: ['22.8%', '5.3%', '1.6%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['23%', '30.7%', '1.2%', '34.7%', 'auto', 'auto'],
                    id: '_3_18Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/18/3_18.png', '0px', '0px']
                },
                {
                    id: 'show23Copy9',
                    type: 'image',
                    rect: ['25.4%', '5.3%', '1.6%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['25.6%', '29.3%', '1.3%', '40%', 'auto', 'auto'],
                    id: '_3_19Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/19/3_19.png', '0px', '0px']
                },
                {
                    id: 'show23Copy10',
                    type: 'image',
                    rect: ['28%', '4%', '1.6%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['28.4%', '28%', '0.8%', '29.8%', 'auto', 'auto'],
                    id: '_3_2Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/2/3_2.png', '0px', '0px']
                },
                {
                    id: 'show23Copy11',
                    type: 'image',
                    rect: ['30.7%', '5.3%', '1.6%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['30.9%', '33.3%', '1.2%', '28%', 'auto', 'auto'],
                    id: '_3_20Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/20/3_20.png', '0px', '0px']
                },
                {
                    id: 'show23Copy12',
                    type: 'image',
                    rect: ['33.3%', '6.7%', '1.6%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['33.8%', '30.8%', '0.9%', '34.4%', 'auto', 'auto'],
                    id: '_3_22Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/22/3_22.png', '0px', '0px']
                },
                {
                    id: 'show23Copy13',
                    type: 'image',
                    rect: ['36.1%', '8%', '1.6%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['36.3%', '38.1%', '1.1%', '26.7%', 'auto', 'auto'],
                    id: '_3_24Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/24/3_24.png', '0px', '0px']
                },
                {
                    id: 'show23Copy14',
                    type: 'image',
                    rect: ['39%', '5.3%', '1.6%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['39.4%', '38.7%', '0.9%', '22.7%', 'auto', 'auto'],
                    id: '_3_21Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/21/3_21.png', '0px', '0px']
                },
                {
                    id: 'show23Copy15',
                    type: 'image',
                    rect: ['41.9%', '6.7%', '1.6%', '86.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['42%', '37.3%', '1.2%', '28%', 'auto', 'auto'],
                    id: '_3_23Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/23/3_23.png', '0px', '0px']
                },
                {
                    id: 'show23Copy16',
                    type: 'image',
                    rect: ['44.8%', '0%', '2.3%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['45%', '5.3%', '1.6%', '86.7%', 'auto', 'auto'],
                    id: '_3_25Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/25/3_25.png', '0px', '0px']
                },
                {
                    id: 'show23Copy17',
                    type: 'image',
                    rect: ['48.2%', '0%', '2.3%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['48.6%', '5.3%', '1.6%', '86.7%', 'auto', 'auto'],
                    id: '_3_28Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/28/3_28.png', '0px', '0px']
                },
                {
                    id: 'show23Copy18',
                    type: 'image',
                    rect: ['51.9%', '2.7%', '2.1%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['52.3%', '31.1%', '1.5%', '41.3%', 'auto', 'auto'],
                    id: '_3_27Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/27/3_27.png', '0px', '0px']
                },
                {
                    id: 'show23Copy19',
                    type: 'image',
                    rect: ['55.4%', '1.3%', '1.8%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['55.6%', '29.3%', '1.5%', '41.3%', 'auto', 'auto'],
                    id: '_3_26Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/26/3_26.png', '0px', '0px']
                },
                {
                    id: 'show23Copy20',
                    type: 'image',
                    rect: ['58.4%', '4%', '1.8%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['58.8%', '24.9%', '0.9%', '42%', 'auto', 'auto'],
                    id: '_3_29Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/29/3_29.png', '0px', '0px']
                },
                {
                    id: 'show23Copy21',
                    type: 'image',
                    rect: ['61.6%', '1.3%', '2.1%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['62%', '20.1%', '1.4%', '48%', 'auto', 'auto'],
                    id: '_3_3Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/3/3_3.png', '0px', '0px']
                },
                {
                    id: 'show23Copy22',
                    type: 'image',
                    rect: ['64.9%', '2.7%', '2.7%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['65.7%', '0.1%', '1.3%', '86.7%', 'auto', 'auto'],
                    id: '_3_30Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/30/3_30.png', '0px', '0px']
                },
                {
                    id: 'show23Copy23',
                    type: 'image',
                    rect: ['68.9%', '1.3%', '2.1%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['69.4%', '18.6%', '1.1%', '58.8%', 'auto', 'auto'],
                    id: '_3_5Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/5/3_5.png', '0px', '0px']
                },
                {
                    id: 'show23Copy24',
                    type: 'image',
                    rect: ['72.4%', '1.3%', '2.3%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['72.9%', '10.8%', '1.4%', '69.3%', 'auto', 'auto'],
                    id: '_3_4Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/4/3_4.png', '0px', '0px']
                },
                {
                    id: 'show23Copy25',
                    type: 'image',
                    rect: ['76%', '1.3%', '2.1%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['76.4%', '15.3%', '1.2%', '62.7%', 'auto', 'auto'],
                    id: '_3_7Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/7/3_7.png', '0px', '0px']
                },
                {
                    id: 'show23Copy26',
                    type: 'image',
                    rect: ['79.4%', '-4%', '2.5%', '106.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['79.7%', '6.6%', '1.8%', '88%', 'auto', 'auto'],
                    id: '_3_8Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/8/3_8.png', '0px', '0px']
                },
                {
                    id: 'show23Copy27',
                    type: 'image',
                    rect: ['83.1%', '1.3%', '2.3%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['83.7%', '28.5%', '0.9%', '42.3%', 'auto', 'auto'],
                    id: '_3_6Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/6/3_6.png', '0px', '0px']
                },
                {
                    id: 'show23Copy28',
                    type: 'image',
                    rect: ['86.8%', '0%', '2.3%', '101.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['87.1%', '12.5%', '1.4%', '69.2%', 'auto', 'auto'],
                    id: '_3_9Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/9/3_9.png', '0px', '0px']
                },
                {
                    id: 'show23Copy29',
                    type: 'image',
                    rect: ['90.5%', '-2.7%', '2.1%', '106.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['90.8%', '26.7%', '1.4%', '44%', 'auto', 'auto'],
                    id: '_3_31Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/31/3_31.png', '0px', '0px']
                },
                {
                    id: 'show23Copy30',
                    type: 'image',
                    rect: ['93.8%', '-8%', '2.5%', '116%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['94.1%', '8%', '1.8%', '86.7%', 'auto', 'auto'],
                    id: '_3_32Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/32/3_32.png', '0px', '0px']
                },
                {
                    id: 'show23Copy31',
                    type: 'image',
                    rect: ['97.8%', '-6.7%', '1.8%', '109.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['98.1%', '32.6%', '1.1%', '22.7%', 'auto', 'auto'],
                    id: '_3_1Copy',
                    transform: [[0, 0], ['90'], ['10']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/3/1/3_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__3_7Copy}": [
                ["style", "top", '15.29%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '62.67%'],
                ["style", "left", '76.44%'],
                ["style", "width", '1.15%']
            ],
            "${_show23Copy31}": [
                ["style", "top", '-6.67%'],
                ["transform", "skewY", '0deg'],
                ["style", "height", '109.33%'],
                ["style", "left", '97.75%'],
                ["style", "width", '1.84%']
            ],
            "${__3_13Copy}": [
                ["style", "top", '18.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '64%'],
                ["style", "left", '5.64%'],
                ["style", "width", '1.45%']
            ],
            "${_show23Copy}": [
                ["style", "top", '8%'],
                ["style", "height", '86%'],
                ["style", "left", '2.72%'],
                ["style", "width", '1.81%']
            ],
            "${_show23Copy25}": [
                ["style", "height", '96%'],
                ["style", "top", '1.33%'],
                ["style", "left", '76.03%'],
                ["style", "width", '2.11%']
            ],
            "${_show23Copy11}": [
                ["style", "top", '5.33%'],
                ["style", "height", '86.67%'],
                ["style", "left", '30.69%'],
                ["style", "width", '1.57%']
            ],
            "${_show23Copy21}": [
                ["style", "height", '96%'],
                ["style", "top", '1.33%'],
                ["style", "left", '61.61%'],
                ["style", "width", '2.08%']
            ],
            "${_show23Copy30}": [
                ["style", "top", '-8%'],
                ["style", "height", '116%'],
                ["style", "left", '93.84%'],
                ["style", "width", '2.52%']
            ],
            "${__3_26Copy}": [
                ["style", "top", '29.33%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '41.33%'],
                ["style", "left", '55.56%'],
                ["style", "width", '1.5%']
            ],
            "${_show23Copy20}": [
                ["style", "top", '4%'],
                ["style", "height", '96%'],
                ["style", "left", '58.39%'],
                ["style", "width", '1.82%']
            ],
            "${_show23Copy10}": [
                ["style", "height", '86.67%'],
                ["style", "top", '4%'],
                ["style", "left", '28%'],
                ["style", "width", '1.57%']
            ],
            "${_show23Copy4}": [
                ["style", "height", '86%'],
                ["style", "top", '5.33%'],
                ["style", "left", '10.8%'],
                ["style", "width", '1.81%']
            ],
            "${__3_28Copy}": [
                ["style", "top", '5.33%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '86.67%'],
                ["style", "left", '48.64%'],
                ["style", "width", '1.56%']
            ],
            "${__3_12Copy}": [
                ["style", "top", '20%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '62.67%'],
                ["style", "left", '3.03%'],
                ["style", "width", '1.3%']
            ],
            "${_show23Copy6}": [
                ["style", "top", '5.33%'],
                ["style", "height", '86%'],
                ["style", "left", '16.47%'],
                ["style", "width", '1.81%']
            ],
            "${__3_27Copy}": [
                ["style", "top", '31.11%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '41.33%'],
                ["style", "left", '52.29%'],
                ["style", "width", '1.46%']
            ],
            "${__3_5Copy}": [
                ["style", "top", '18.6%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '58.77%'],
                ["style", "left", '69.43%'],
                ["style", "width", '1.09%']
            ],
            "${__3_3Copy}": [
                ["style", "top", '20.06%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '48%'],
                ["style", "left", '61.96%'],
                ["style", "width", '1.44%']
            ],
            "${__3_8Copy}": [
                ["style", "top", '6.62%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '88%'],
                ["style", "left", '79.68%'],
                ["style", "width", '1.79%']
            ],
            "${__3_18Copy}": [
                ["style", "top", '30.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '34.67%'],
                ["style", "left", '22.95%'],
                ["style", "width", '1.21%']
            ],
            "${__3_1Copy}": [
                ["style", "top", '32.64%'],
                ["transform", "skewX", '10deg'],
                ["style", "height", '22.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "left", '98.13%'],
                ["style", "width", '1.09%']
            ],
            "${_show23Copy7}": [
                ["style", "top", '5.33%'],
                ["style", "height", '86.67%'],
                ["style", "left", '19.39%'],
                ["style", "width", '2.42%']
            ],
            "${_show23Copy2}": [
                ["style", "top", '5.33%'],
                ["style", "height", '86%'],
                ["style", "left", '5.43%'],
                ["style", "width", '1.81%']
            ],
            "${__3_30Copy}": [
                ["style", "top", '0.14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '86.67%'],
                ["style", "left", '65.72%'],
                ["style", "width", '1.33%']
            ],
            "${_show23}": [
                ["style", "height", '86.67%'],
                ["style", "top", '8%'],
                ["style", "left", '0%'],
                ["style", "width", '1.81%']
            ],
            "${_show23Copy28}": [
                ["style", "top", '0%'],
                ["style", "height", '101.33%'],
                ["style", "left", '86.77%'],
                ["style", "width", '2.31%']
            ],
            "${__3_24Copy}": [
                ["style", "top", '38.13%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '26.67%'],
                ["style", "left", '36.26%'],
                ["style", "width", '1.13%']
            ],
            "${__3_4Copy}": [
                ["style", "top", '10.83%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '69.33%'],
                ["style", "left", '72.88%'],
                ["style", "width", '1.38%']
            ],
            "${_show23Copy27}": [
                ["style", "height", '96%'],
                ["style", "top", '1.33%'],
                ["style", "left", '83.09%'],
                ["style", "width", '2.31%']
            ],
            "${_show23Copy3}": [
                ["style", "height", '86%'],
                ["style", "top", '6.67%'],
                ["style", "left", '8.09%'],
                ["style", "width", '1.81%']
            ],
            "${__3_6Copy}": [
                ["style", "top", '28.52%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.27%'],
                ["style", "left", '83.74%'],
                ["style", "width", '0.91%']
            ],
            "${_show23Copy24}": [
                ["style", "top", '1.33%'],
                ["style", "height", '96%'],
                ["style", "left", '72.44%'],
                ["style", "width", '2.31%']
            ],
            "${__3_25Copy}": [
                ["style", "top", '5.33%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '86.67%'],
                ["style", "left", '45.02%'],
                ["style", "width", '1.64%']
            ],
            "${__3_15Copy}": [
                ["style", "top", '24%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '49.33%'],
                ["style", "left", '16.64%'],
                ["style", "width", '1.5%']
            ],
            "${_show23Copy12}": [
                ["style", "top", '6.67%'],
                ["style", "height", '86.67%'],
                ["style", "left", '33.31%'],
                ["style", "width", '1.57%']
            ],
            "${__3_19Copy}": [
                ["style", "top", '29.33%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '40%'],
                ["style", "left", '25.58%'],
                ["style", "width", '1.25%']
            ],
            "${__3_21Copy}": [
                ["style", "top", '38.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '22.67%'],
                ["style", "left", '39.36%'],
                ["style", "width", '0.92%']
            ],
            "${__3_11Copy}": [
                ["style", "top", '29.33%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '50%'],
                ["style", "left", '0.24%'],
                ["style", "width", '1.2%']
            ],
            "${_show23Copy29}": [
                ["style", "height", '106.67%'],
                ["style", "top", '-2.67%'],
                ["style", "left", '90.45%'],
                ["style", "width", '2.11%']
            ],
            "${__3_23Copy}": [
                ["style", "top", '37.33%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '28%'],
                ["style", "left", '41.96%'],
                ["style", "width", '1.16%']
            ],
            "${__3_32Copy}": [
                ["style", "top", '8%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '86.67%'],
                ["style", "left", '94.1%'],
                ["style", "width", '1.8%']
            ],
            "${__3_16Copy}": [
                ["style", "top", '22.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '49.33%'],
                ["style", "left", '13.9%'],
                ["style", "width", '1.29%']
            ],
            "${__3_10Copy}": [
                ["style", "top", '20%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '52.4%'],
                ["style", "left", '11.04%'],
                ["style", "width", '1.4%']
            ],
            "${__3_2Copy}": [
                ["style", "top", '28%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '29.8%'],
                ["style", "left", '28.38%'],
                ["style", "width", '0.77%']
            ],
            "${symbolSelector}": [
                ["style", "height", '78.44%'],
                ["style", "width", '1019.45%']
            ],
            "${__3_31Copy}": [
                ["style", "top", '26.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '44%'],
                ["style", "left", '90.77%'],
                ["style", "width", '1.36%']
            ],
            "${_show23Copy26}": [
                ["style", "top", '-4%'],
                ["style", "height", '106.67%'],
                ["style", "left", '79.39%'],
                ["style", "width", '2.52%']
            ],
            "${_show23Copy18}": [
                ["style", "height", '96%'],
                ["style", "top", '2.67%'],
                ["style", "left", '51.91%'],
                ["style", "width", '2.11%']
            ],
            "${__3_14Copy}": [
                ["style", "top", '18.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '62.67%'],
                ["style", "left", '8.26%'],
                ["style", "width", '1.47%']
            ],
            "${__3_9Copy}": [
                ["style", "top", '12.52%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '69.18%'],
                ["style", "left", '87.09%'],
                ["style", "width", '1.41%']
            ],
            "${__3_17Copy}": [
                ["style", "top", '14.67%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '69.33%'],
                ["style", "left", '19.82%'],
                ["style", "width", '1.48%']
            ],
            "${_show23Copy23}": [
                ["style", "height", '96%'],
                ["style", "top", '1.33%'],
                ["style", "left", '68.93%'],
                ["style", "width", '2.08%']
            ],
            "${__3_20Copy}": [
                ["style", "top", '33.33%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '28%'],
                ["style", "left", '30.86%'],
                ["style", "width", '1.2%']
            ],
            "${_show23Copy5}": [
                ["style", "top", '4%'],
                ["style", "height", '86%'],
                ["style", "left", '13.66%'],
                ["style", "width", '1.81%']
            ],
            "${_show23Copy8}": [
                ["style", "top", '5.33%'],
                ["style", "height", '86.67%'],
                ["style", "left", '22.77%'],
                ["style", "width", '1.57%']
            ],
            "${_show23Copy9}": [
                ["style", "height", '86.67%'],
                ["style", "top", '5.33%'],
                ["style", "left", '25.4%'],
                ["style", "width", '1.57%']
            ],
            "${_show23Copy13}": [
                ["style", "top", '8%'],
                ["style", "height", '86.67%'],
                ["style", "left", '36.12%'],
                ["style", "width", '1.57%']
            ],
            "${_show23Copy15}": [
                ["style", "height", '86.67%'],
                ["style", "top", '6.67%'],
                ["style", "left", '41.9%'],
                ["style", "width", '1.57%']
            ],
            "${_show23Copy16}": [
                ["style", "top", '0%'],
                ["style", "height", '96%'],
                ["style", "left", '44.76%'],
                ["style", "width", '2.31%']
            ],
            "${_show23Copy14}": [
                ["style", "height", '86.67%'],
                ["style", "top", '5.33%'],
                ["style", "left", '39.04%'],
                ["style", "width", '1.57%']
            ],
            "${__3_29Copy}": [
                ["style", "top", '24.88%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42%'],
                ["style", "left", '58.8%'],
                ["style", "width", '0.89%']
            ],
            "${_show23Copy19}": [
                ["style", "top", '1.33%'],
                ["style", "height", '96%'],
                ["style", "left", '55.39%'],
                ["style", "width", '1.82%']
            ],
            "${_show23Copy22}": [
                ["style", "height", '96%'],
                ["style", "top", '2.67%'],
                ["style", "left", '64.93%'],
                ["style", "width", '2.67%']
            ],
            "${__3_22Copy}": [
                ["style", "top", '30.77%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '34.41%'],
                ["style", "left", '33.75%'],
                ["style", "width", '0.9%']
            ],
            "${_show23Copy17}": [
                ["style", "height", '96%'],
                ["style", "top", '0%'],
                ["style", "left", '48.23%'],
                ["style", "width", '2.31%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Ani_1": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'show22',
                    type: 'image',
                    rect: ['0.1%', '-10.3%', '3.7%', '110.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['0.9%', '-6%', '1.7%', '100%', 'auto', 'auto'],
                    id: '_1_2Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/2/1_2.png', '0px', '0px']
                },
                {
                    id: 'show22Copy',
                    type: 'image',
                    rect: ['5%', '-10.3%', '3.7%', '110%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['5.9%', '-17.1%', '1.6%', '112.2%', 'auto', 'auto'],
                    id: '_1_22Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/22/1_22.png', '0px', '0px']
                },
                {
                    id: 'show22Copy2',
                    type: 'image',
                    rect: ['9.6%', '-10.3%', '2.8%', '110%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['10.2%', '-3.6%', '1.4%', '92.7%', 'auto', 'auto'],
                    id: '_1_3Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/3/1_3.png', '0px', '0px']
                },
                {
                    id: 'show22Copy3',
                    type: 'image',
                    rect: ['13.4%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['13.8%', '2.6%', '1.6%', '91.8%', 'auto', 'auto'],
                    id: '_1_10Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/10/1_10.png', '0px', '0px']
                },
                {
                    id: 'show22Copy4',
                    type: 'image',
                    rect: ['17%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['17.4%', '1.3%', '1.8%', '92.7%', 'auto', 'auto'],
                    id: '_1_14Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/14/1_14.png', '0px', '0px']
                },
                {
                    id: 'show22Copy5',
                    type: 'image',
                    rect: ['20.7%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['21.2%', '0.1%', '1.8%', '90.2%', 'auto', 'auto'],
                    id: '_1_15Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/15/1_15.png', '0px', '0px']
                },
                {
                    id: 'show22Copy6',
                    type: 'image',
                    rect: ['24.7%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['25.3%', '0%', '1.5%', '90.2%', 'auto', 'auto'],
                    id: '_1_1Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/1/1_1.png', '0px', '0px']
                },
                {
                    id: 'show22Copy7',
                    type: 'image',
                    rect: ['28.6%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['29.1%', '-2.9%', '1.6%', '95.1%', 'auto', 'auto'],
                    id: '_1_16Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/16/1_16.png', '0px', '0px']
                },
                {
                    id: 'show22Copy8',
                    type: 'image',
                    rect: ['32.4%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['33%', '9.8%', '1.5%', '73.2%', 'auto', 'auto'],
                    id: '_1_7Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/7/1_7.png', '0px', '0px']
                },
                {
                    id: 'show22Copy9',
                    type: 'image',
                    rect: ['36.3%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['36.9%', '4.9%', '1.5%', '82.9%', 'auto', 'auto'],
                    id: '_1_9Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/9/1_9.png', '0px', '0px']
                },
                {
                    id: 'show22Copy10',
                    type: 'image',
                    rect: ['40.1%', '0%', '3.7%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['41.2%', '-19.5%', '1.5%', '129.5%', 'auto', 'auto'],
                    id: '_1_4Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/4/1_4.png', '0px', '0px']
                },
                {
                    id: 'show22Copy11',
                    type: 'image',
                    rect: ['45%', '0%', '3.7%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['46.1%', '-12.2%', '1.4%', '120%', 'auto', 'auto'],
                    id: '_1_5Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/5/1_5.png', '0px', '0px']
                },
                {
                    id: 'show22Copy12',
                    type: 'image',
                    rect: ['50%', '-5.1%', '4.5%', '112.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['51.7%', '-17.1%', '1.7%', '130.8%', 'auto', 'auto'],
                    id: '_1_23Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/23/1_23.png', '0px', '0px']
                },
                {
                    id: 'show22Copy13',
                    type: 'image',
                    rect: ['55.9%', '2.6%', '3.7%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['57.2%', '-17.1%', '1.5%', '129.3%', 'auto', 'auto'],
                    id: '_1_8Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/8/1_8.png', '0px', '0px']
                },
                {
                    id: 'show22Copy14',
                    type: 'image',
                    rect: ['60.9%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['61.6%', '-5.4%', '1.4%', '89.7%', 'auto', 'auto'],
                    id: '_1_17Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/17/1_17.png', '0px', '0px']
                },
                {
                    id: 'show22Copy15',
                    type: 'image',
                    rect: ['64.8%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['65.4%', '4.9%', '1.5%', '79.5%', 'auto', 'auto'],
                    id: '_1_24Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/24/1_24.png', '0px', '0px']
                },
                {
                    id: 'show22Copy16',
                    type: 'image',
                    rect: ['68.7%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['69.4%', '4.9%', '1.3%', '81.8%', 'auto', 'auto'],
                    id: '_1_21Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/21/1_21.png', '0px', '0px']
                },
                {
                    id: 'show22Copy17',
                    type: 'image',
                    rect: ['72.6%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['73.4%', '-0.9%', '1.3%', '83%', 'auto', 'auto'],
                    id: '_1_25Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/25/1_25.png', '0px', '0px']
                },
                {
                    id: 'show22Copy18',
                    type: 'image',
                    rect: ['76.4%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['77.1%', '11.1%', '1.3%', '59%', 'auto', 'auto'],
                    id: '_1_19Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/19/1_19.png', '0px', '0px']
                },
                {
                    id: 'show22Copy19',
                    type: 'image',
                    rect: ['80.3%', '0%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['80.9%', '15.4%', '1.6%', '72.8%', 'auto', 'auto'],
                    id: '_1_18Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/18/1_18.png', '0px', '0px']
                },
                {
                    id: 'show22Copy20',
                    type: 'image',
                    rect: ['84.2%', '2.6%', '2.8%', '97.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    id: '_1_6Copy',
                    type: 'image',
                    rect: ['84.7%', '10.3%', '2%', '84.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/6/1_6.png', '0px', '0px']
                },
                {
                    id: 'show22Copy21',
                    type: 'image',
                    rect: ['88%', '10.3%', '2.1%', '82.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    id: '_1_11Copy',
                    type: 'image',
                    rect: ['88.8%', '38.5%', '0.8%', '25.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/11/1_11.png', '0px', '0px']
                },
                {
                    id: 'show22Copy22',
                    type: 'image',
                    rect: ['91.1%', '5.1%', '2.2%', '94.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    id: '_1_13Copy',
                    type: 'image',
                    rect: ['91.5%', '20.5%', '1.3%', '61.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/13/1_13.png', '0px', '0px']
                },
                {
                    id: 'show22Copy23',
                    type: 'image',
                    rect: ['94.4%', '2.6%', '2.2%', '94.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    id: '_1_12Copy',
                    type: 'image',
                    rect: ['95%', '30.8%', '1.1%', '51.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/12/1_12.png', '0px', '0px']
                },
                {
                    id: 'show22Copy24',
                    type: 'image',
                    rect: ['97.6%', '2.6%', '2.2%', '94.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    id: '_1_20Copy',
                    type: 'image',
                    rect: ['98.4%', '33.3%', '0.6%', '35.9%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/1/20/1_20.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__1_12Copy}": [
                ["style", "height", '51.28%'],
                ["style", "top", '30.77%'],
                ["style", "left", '94.98%'],
                ["style", "width", '1.05%']
            ],
            "${__1_7Copy}": [
                ["style", "top", '9.76%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '73.17%'],
                ["style", "left", '33%'],
                ["style", "width", '1.47%']
            ],
            "${_show22Copy10}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '40.13%'],
                ["style", "width", '3.68%']
            ],
            "${__1_5Copy}": [
                ["style", "top", '-12.2%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '120.01%'],
                ["style", "left", '46.13%'],
                ["style", "width", '1.36%']
            ],
            "${__1_4Copy}": [
                ["style", "top", '-19.51%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '129.45%'],
                ["style", "left", '41.18%'],
                ["style", "width", '1.48%']
            ],
            "${_show22Copy24}": [
                ["style", "top", '2.56%'],
                ["style", "height", '94.87%'],
                ["style", "left", '97.55%'],
                ["style", "width", '2.21%']
            ],
            "${__1_15Copy}": [
                ["style", "top", '0.08%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '90.24%'],
                ["style", "left", '21.2%'],
                ["style", "width", '1.76%']
            ],
            "${__1_6Copy}": [
                ["style", "top", '10.26%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '84.62%'],
                ["style", "left", '84.68%'],
                ["style", "width", '1.97%']
            ],
            "${__1_3Copy}": [
                ["style", "top", '-3.6%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '92.68%'],
                ["style", "left", '10.22%'],
                ["style", "width", '1.43%']
            ],
            "${_show22Copy23}": [
                ["style", "top", '2.56%'],
                ["style", "height", '94.87%'],
                ["style", "left", '94.42%'],
                ["style", "width", '2.21%']
            ],
            "${_show22}": [
                ["style", "top", '-10.26%'],
                ["style", "height", '110.26%'],
                ["style", "left", '0.06%'],
                ["style", "width", '3.68%']
            ],
            "${__1_22Copy}": [
                ["style", "top", '-17.07%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '112.2%'],
                ["style", "left", '5.87%'],
                ["style", "width", '1.59%']
            ],
            "${__1_21Copy}": [
                ["style", "top", '4.88%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '81.77%'],
                ["style", "left", '69.4%'],
                ["style", "width", '1.32%']
            ],
            "${__1_16Copy}": [
                ["style", "top", '-2.85%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '95.12%'],
                ["style", "left", '29.08%'],
                ["style", "width", '1.63%']
            ],
            "${__1_8Copy}": [
                ["style", "top", '-17.07%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '129.27%'],
                ["style", "left", '57.18%'],
                ["style", "width", '1.49%']
            ],
            "${_show22Copy11}": [
                ["style", "height", '97.44%'],
                ["style", "top", '0%'],
                ["style", "left", '45.04%'],
                ["style", "width", '3.68%']
            ],
            "${__1_25Copy}": [
                ["style", "top", '-0.93%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '82.97%'],
                ["style", "left", '73.35%'],
                ["style", "width", '1.32%']
            ],
            "${__1_9Copy}": [
                ["style", "top", '4.88%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '82.93%'],
                ["style", "left", '36.92%'],
                ["style", "width", '1.46%']
            ],
            "${_show22Copy5}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '20.71%'],
                ["style", "width", '2.81%']
            ],
            "${__1_17Copy}": [
                ["style", "top", '-5.41%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '89.74%'],
                ["style", "left", '61.59%'],
                ["style", "width", '1.38%']
            ],
            "${_show22Copy7}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '28.55%'],
                ["style", "width", '2.81%']
            ],
            "${__1_24Copy}": [
                ["style", "top", '4.88%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '79.49%'],
                ["style", "left", '65.41%'],
                ["style", "width", '1.48%']
            ],
            "${__1_23Copy}": [
                ["style", "top", '-17.07%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '130.77%'],
                ["style", "left", '51.65%'],
                ["style", "width", '1.66%']
            ],
            "${_show22Copy18}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '76.41%'],
                ["style", "width", '2.81%']
            ],
            "${__1_19Copy}": [
                ["style", "top", '11.06%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '58.97%'],
                ["style", "left", '77.1%'],
                ["style", "width", '1.29%']
            ],
            "${_show22Copy22}": [
                ["style", "height", '94.87%'],
                ["style", "top", '5.13%'],
                ["style", "left", '91.12%'],
                ["style", "width", '2.21%']
            ],
            "${_show22Copy20}": [
                ["style", "top", '2.56%'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '97.44%'],
                ["style", "left", '84.18%'],
                ["style", "width", '2.82%']
            ],
            "${__1_20Copy}": [
                ["style", "top", '33.33%'],
                ["style", "height", '35.9%'],
                ["style", "left", '98.41%'],
                ["style", "width", '0.62%']
            ],
            "${_show22Copy3}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '13.42%'],
                ["style", "width", '2.81%']
            ],
            "${_show22Copy21}": [
                ["style", "top", '10.26%'],
                ["style", "height", '82.05%'],
                ["style", "left", '87.99%'],
                ["style", "width", '2.12%']
            ],
            "${__1_10Copy}": [
                ["style", "top", '2.56%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '91.75%'],
                ["style", "left", '13.79%'],
                ["style", "width", '1.6%']
            ],
            "${__1_2Copy}": [
                ["style", "top", '-5.98%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '100%'],
                ["style", "left", '0.94%'],
                ["style", "width", '1.71%']
            ],
            "${__1_14Copy}": [
                ["style", "top", '1.3%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '92.68%'],
                ["style", "left", '17.39%'],
                ["style", "width", '1.76%']
            ],
            "${_show22Copy19}": [
                ["style", "height", '97.44%'],
                ["style", "top", '0%'],
                ["style", "left", '80.33%'],
                ["style", "width", '2.81%']
            ],
            "${_show22Copy17}": [
                ["style", "height", '97.44%'],
                ["style", "top", '0%'],
                ["style", "left", '72.55%'],
                ["style", "width", '2.81%']
            ],
            "${_show22Copy16}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '68.69%'],
                ["style", "width", '2.81%']
            ],
            "${__1_1Copy}": [
                ["style", "top", '0%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '90.24%'],
                ["style", "left", '25.26%'],
                ["style", "width", '1.53%']
            ],
            "${_show22Copy15}": [
                ["style", "height", '97.44%'],
                ["style", "top", '0%'],
                ["style", "left", '64.77%'],
                ["style", "width", '2.81%']
            ],
            "${__1_13Copy}": [
                ["style", "height", '61.54%'],
                ["style", "top", '20.51%'],
                ["style", "left", '91.54%'],
                ["style", "width", '1.29%']
            ],
            "${_show22Copy9}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '36.34%'],
                ["style", "width", '2.81%']
            ],
            "${_show22Copy4}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '17.03%'],
                ["style", "width", '2.81%']
            ],
            "${_show22Copy12}": [
                ["style", "top", '-5.13%'],
                ["style", "height", '112.82%'],
                ["style", "left", '50.01%'],
                ["style", "width", '4.48%']
            ],
            "${_show22Copy13}": [
                ["style", "height", '97.44%'],
                ["style", "top", '2.56%'],
                ["style", "left", '55.94%'],
                ["style", "width", '3.7%']
            ],
            "${_show22Copy8}": [
                ["style", "height", '97.44%'],
                ["style", "top", '0%'],
                ["style", "left", '32.35%'],
                ["style", "width", '2.81%']
            ],
            "${_show22Copy6}": [
                ["style", "height", '97.44%'],
                ["style", "top", '0%'],
                ["style", "left", '24.69%'],
                ["style", "width", '2.81%']
            ],
            "${_show22Copy14}": [
                ["style", "top", '0%'],
                ["style", "height", '97.44%'],
                ["style", "left", '60.85%'],
                ["style", "width", '2.81%']
            ],
            "${_show22Copy2}": [
                ["style", "height", '110%'],
                ["style", "top", '-10.26%'],
                ["style", "left", '9.62%'],
                ["style", "width", '2.81%']
            ],
            "${__1_18Copy}": [
                ["style", "top", '15.38%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '72.76%'],
                ["style", "left", '80.88%'],
                ["style", "width", '1.59%']
            ],
            "${symbolSelector}": [
                ["style", "height", '42.6%'],
                ["style", "width", '566.57%']
            ],
            "${_show22Copy}": [
                ["style", "height", '110%'],
                ["style", "top", '-10.26%'],
                ["style", "left", '4.96%'],
                ["style", "width", '3.68%']
            ],
            "${__1_11Copy}": [
                ["style", "height", '25.64%'],
                ["style", "top", '38.46%'],
                ["style", "left", '88.79%'],
                ["style", "width", '0.76%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Ani_4": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'show23',
                    type: 'image',
                    rect: ['-0.1%', '14.9%', '1.7%', '67.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['0.1%', '28.6%', '1.3%', '42.9%', 'auto', 'auto'],
                    id: '_4_1Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/1/4_1.png', '0px', '0px']
                },
                {
                    id: 'show23Copy',
                    type: 'image',
                    rect: ['2.4%', '16.6%', '1.7%', '65.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['2.4%', '26%', '1.5%', '44.7%', 'auto', 'auto'],
                    id: '_4_21Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/21/4_21.png', '0px', '0px']
                },
                {
                    id: 'show23Copy2',
                    type: 'image',
                    rect: ['5%', '15.3%', '1.7%', '68.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['5.1%', '27.3%', '1.3%', '42.2%', 'auto', 'auto'],
                    id: '_4_34Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/34/4_34.png', '0px', '0px']
                },
                {
                    id: 'show23Copy3',
                    type: 'image',
                    rect: ['7.4%', '15.6%', '1.9%', '68.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['7.7%', '29.9%', '1.3%', '39.6%', 'auto', 'auto'],
                    id: '_4_16Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/16/4_16.png', '0px', '0px']
                },
                {
                    id: 'show23Copy4',
                    type: 'image',
                    rect: ['10%', '15.9%', '1.9%', '68.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['10.3%', '31.2%', '1.3%', '42.2%', 'auto', 'auto'],
                    id: '_4_3Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/3/4_3.png', '0px', '0px']
                },
                {
                    id: 'show23Copy5',
                    type: 'image',
                    rect: ['12.7%', '17.5%', '1.5%', '68.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['12.8%', '29.6%', '1.3%', '42.9%', 'auto', 'auto'],
                    id: '_4_19Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/19/4_19.png', '0px', '0px']
                },
                {
                    id: 'show23Copy6',
                    type: 'image',
                    rect: ['15%', '16.9%', '1.7%', '70.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['15.5%', '30.2%', '0.9%', '42.9%', 'auto', 'auto'],
                    id: '_4_17Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/17/4_17.png', '0px', '0px']
                },
                {
                    id: 'show23Copy7',
                    type: 'image',
                    rect: ['17.5%', '16.6%', '1.6%', '70.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['17.8%', '33.1%', '0.8%', '38.4%', 'auto', 'auto'],
                    id: '_4_18Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/18/4_18.png', '0px', '0px']
                },
                {
                    id: 'show23Copy8',
                    type: 'image',
                    rect: ['19.8%', '14%', '2.3%', '76.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['20.2%', '21.6%', '1.5%', '64.9%', 'auto', 'auto'],
                    id: '_4_20Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/20/4_20.png', '0px', '0px']
                },
                {
                    id: 'show23Copy9',
                    type: 'image',
                    rect: ['22.9%', '15.9%', '1.9%', '70.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['23%', '30.2%', '1.5%', '38.5%', 'auto', 'auto'],
                    id: '_4_2Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/2/4_2.png', '0px', '0px']
                },
                {
                    id: 'show23Copy10',
                    type: 'image',
                    rect: ['25.7%', '15.3%', '1.9%', '68.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['25.8%', '25.3%', '1.4%', '42.4%', 'auto', 'auto'],
                    id: '_4_25Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/25/4_25.png', '0px', '0px']
                },
                {
                    id: 'show23Copy11',
                    type: 'image',
                    rect: ['28.4%', '16.6%', '1.7%', '68.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['28.5%', '28.3%', '1.3%', '42.2%', 'auto', 'auto'],
                    id: '_4_26Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/26/4_26.png', '0px', '0px']
                },
                {
                    id: 'show23Copy12',
                    type: 'image',
                    rect: ['31.1%', '14.6%', '1.9%', '70.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['31.3%', '25.3%', '1.5%', '49.4%', 'auto', 'auto'],
                    id: '_4_29Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/29/4_29.png', '0px', '0px']
                },
                {
                    id: 'show23Copy13',
                    type: 'image',
                    rect: ['33.9%', '15.3%', '1.7%', '69.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['34.1%', '29.9%', '1.5%', '42.9%', 'auto', 'auto'],
                    id: '_4_28Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/28/4_28.png', '0px', '0px']
                },
                {
                    id: 'show23Copy14',
                    type: 'image',
                    rect: ['36.7%', '23.7%', '1.5%', '56.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['37.1%', '41.9%', '0.7%', '20.9%', 'auto', 'auto'],
                    id: '_4_22Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/22/4_22.png', '0px', '0px']
                },
                {
                    id: 'show23Copy15',
                    type: 'image',
                    rect: ['39%', '21.8%', '1.5%', '60.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['39.4%', '44.5%', '0.6%', '17.6%', 'auto', 'auto'],
                    id: '_4_23Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/23/4_23.png', '0px', '0px']
                },
                {
                    id: 'show23Copy16',
                    type: 'image',
                    rect: ['41.4%', '23.1%', '1.5%', '59.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['41.7%', '37%', '0.7%', '27.3%', 'auto', 'auto'],
                    id: '_4_24Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/24/4_24.png', '0px', '0px']
                },
                {
                    id: 'show23Copy17',
                    type: 'image',
                    rect: ['43.7%', '25%', '1.5%', '56.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['44%', '51%', '0.6%', '3.3%', 'auto', 'auto'],
                    id: '_4_27Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/27/4_27.png', '0px', '0px']
                },
                {
                    id: 'show23Copy18',
                    type: 'image',
                    rect: ['46.1%', '17.5%', '2%', '69.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['46.4%', '27.3%', '1.3%', '53.3%', 'auto', 'auto'],
                    id: '_4_30Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/30/4_30.png', '0px', '0px']
                },
                {
                    id: 'show23Copy19',
                    type: 'image',
                    rect: ['49.2%', '15.3%', '1.7%', '70.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['49.4%', '25%', '1.2%', '50.7%', 'auto', 'auto'],
                    id: '_4_31Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/31/4_31.png', '0px', '0px']
                },
                {
                    id: 'show23Copy20',
                    type: 'image',
                    rect: ['52.1%', '14%', '1.5%', '71.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['52.1%', '32.5%', '1.4%', '36.8%', 'auto', 'auto'],
                    id: '_4_33Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/33/4_33.png', '0px', '0px']
                },
                {
                    id: 'show23Copy21',
                    type: 'image',
                    rect: ['54.7%', '15.9%', '1.7%', '69.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['55%', '32.1%', '1.2%', '31.5%', 'auto', 'auto'],
                    id: '_4_35Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/35/4_35.png', '0px', '0px']
                },
                {
                    id: 'show23Copy36',
                    type: 'image',
                    rect: ['57.5%', '14.6%', '1.5%', '70.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['57.7%', '34.4%', '1%', '37.3%', 'auto', 'auto'],
                    id: '_4_32Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/32/4_32.png', '0px', '0px']
                },
                {
                    id: 'show23Copy22',
                    type: 'image',
                    rect: ['60.1%', '15.9%', '1.6%', '70.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['60.3%', '32.5%', '1.3%', '36.8%', 'auto', 'auto'],
                    id: '_4_36Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/36/4_36.png', '0px', '0px']
                },
                {
                    id: 'show23Copy23',
                    type: 'image',
                    rect: ['62.9%', '13%', '1.5%', '74.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['63%', '31.8%', '1.2%', '35.1%', 'auto', 'auto'],
                    id: '_4_37Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/37/4_37.png', '0px', '0px']
                },
                {
                    id: 'show23Copy24',
                    type: 'image',
                    rect: ['65.6%', '13%', '1.9%', '76.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['65.8%', '31.2%', '1.5%', '37.3%', 'auto', 'auto'],
                    id: '_4_38Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/38/4_38.png', '0px', '0px']
                },
                {
                    id: 'show23Copy25',
                    type: 'image',
                    rect: ['68.6%', '8.1%', '1.9%', '82.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['68.8%', '26%', '1.6%', '43.8%', 'auto', 'auto'],
                    id: '_4_4Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/4/4_4.png', '0px', '0px']
                },
                {
                    id: 'show23Copy26',
                    type: 'image',
                    rect: ['71.6%', '12%', '1.9%', '79.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['71.8%', '29.2%', '1.6%', '49.4%', 'auto', 'auto'],
                    id: '_4_5Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/5/4_5.png', '0px', '0px']
                },
                {
                    id: 'show23Copy27',
                    type: 'image',
                    rect: ['74.7%', '21.1%', '1.7%', '65.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['75%', '32.1%', '1.2%', '40.3%', 'auto', 'auto'],
                    id: '_4_6Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/6/4_6.png', '0px', '0px']
                },
                {
                    id: 'show23Copy28',
                    type: 'image',
                    rect: ['77.5%', '14.9%', '1.8%', '74.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['77.8%', '26.3%', '1.2%', '46.2%', 'auto', 'auto'],
                    id: '_4_7Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/7/4_7.png', '0px', '0px']
                },
                {
                    id: 'show23Copy29',
                    type: 'image',
                    rect: ['80.4%', '9.7%', '2.8%', '80.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['81%', '7.8%', '1.7%', '79.6%', 'auto', 'auto'],
                    id: '_4_8Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/8/4_8.png', '0px', '0px']
                },
                {
                    id: 'show23Copy30',
                    type: 'image',
                    rect: ['84.3%', '18.5%', '1.7%', '66.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['84.5%', '36%', '1.2%', '33.8%', 'auto', 'auto'],
                    id: '_4_9Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/9/4_9.png', '0px', '0px']
                },
                {
                    id: 'show23Copy31',
                    type: 'image',
                    rect: ['89.2%', '23.4%', '1.3%', '57.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['89.7%', '41.6%', '0.5%', '16.9%', 'auto', 'auto'],
                    id: '_4_12Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/12/4_12.png', '0px', '0px']
                },
                {
                    id: 'show23Copy37',
                    type: 'image',
                    rect: ['87%', '24.7%', '1.3%', '53.6%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['87.3%', '39.6%', '0.7%', '21.4%', 'auto', 'auto'],
                    id: '_4_13Copy',
                    transform: [[0, 0], ['90'], ['0', '4']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/13/4_13.png', '0px', '0px']
                },
                {
                    id: 'show23Copy32',
                    type: 'image',
                    rect: ['91.4%', '21.1%', '1.3%', '59.1%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['91.8%', '40.9%', '0.4%', '13.9%', 'auto', 'auto'],
                    id: '_4_14Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/14/4_14.png', '0px', '0px']
                },
                {
                    id: 'show23Copy33',
                    type: 'image',
                    rect: ['93.8%', '19.8%', '1.3%', '63%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['94.3%', '39.9%', '0.4%', '16.8%', 'auto', 'auto'],
                    id: '_4_15Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/15/4_15.png', '0px', '0px']
                },
                {
                    id: 'show23Copy34',
                    type: 'image',
                    rect: ['96.1%', '20.5%', '1.3%', '62.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['96.5%', '44.5%', '0.6%', '14%', 'auto', 'auto'],
                    id: '_4_10Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/10/4_10.png', '0px', '0px']
                },
                {
                    id: 'show23Copy35',
                    type: 'image',
                    rect: ['98.5%', '19.2%', '1.3%', '63%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    rect: ['98.8%', '44.8%', '0.4%', '7.2%', 'auto', 'auto'],
                    id: '_4_11Copy',
                    transform: [[0, 0], ['90']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/4/11/4_11.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__4_19Copy}": [
                ["style", "top", '29.55%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.86%'],
                ["style", "left", '12.75%'],
                ["style", "width", '1.25%']
            ],
            "${__4_14Copy}": [
                ["style", "top", '40.91%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '13.93%'],
                ["style", "left", '91.81%'],
                ["style", "width", '0.43%']
            ],
            "${__4_33Copy}": [
                ["style", "top", '32.47%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '36.77%'],
                ["style", "left", '52.13%'],
                ["style", "width", '1.43%']
            ],
            "${__4_21Copy}": [
                ["style", "top", '25.97%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '44.67%'],
                ["style", "left", '2.43%'],
                ["style", "width", '1.45%']
            ],
            "${_show23Copy31}": [
                ["style", "height", '57.79%'],
                ["style", "top", '23.38%'],
                ["style", "left", '89.17%'],
                ["style", "width", '1.33%']
            ],
            "${_show23Copy18}": [
                ["style", "height", '69.16%'],
                ["style", "top", '17.53%'],
                ["style", "left", '46.13%'],
                ["style", "width", '2.02%']
            ],
            "${_show23Copy25}": [
                ["style", "top", '8.12%'],
                ["style", "height", '82.14%'],
                ["style", "left", '68.58%'],
                ["style", "width", '1.9%']
            ],
            "${__4_7Copy}": [
                ["style", "top", '26.3%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '46.23%'],
                ["style", "left", '77.77%'],
                ["style", "width", '1.2%']
            ],
            "${_show23Copy21}": [
                ["style", "height", '69.81%'],
                ["style", "top", '15.91%'],
                ["style", "left", '54.73%'],
                ["style", "width", '1.71%']
            ],
            "${_show23Copy30}": [
                ["style", "top", '18.51%'],
                ["style", "height", '66.23%'],
                ["style", "left", '84.31%'],
                ["style", "width", '1.71%']
            ],
            "${__4_16Copy}": [
                ["style", "top", '29.87%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '39.61%'],
                ["style", "left", '7.69%'],
                ["style", "width", '1.27%']
            ],
            "${__4_38Copy}": [
                ["style", "top", '31.17%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '37.34%'],
                ["style", "left", '65.78%'],
                ["style", "width", '1.48%']
            ],
            "${__4_2Copy}": [
                ["style", "top", '30.19%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '38.45%'],
                ["style", "left", '23.02%'],
                ["style", "width", '1.49%']
            ],
            "${_show23Copy10}": [
                ["style", "top", '15.26%'],
                ["style", "height", '68.83%'],
                ["style", "left", '25.66%'],
                ["style", "width", '1.9%']
            ],
            "${_show23Copy4}": [
                ["style", "top", '15.91%'],
                ["style", "height", '68.18%'],
                ["style", "left", '9.99%'],
                ["style", "width", '1.9%']
            ],
            "${__4_29Copy}": [
                ["style", "top", '25.32%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '49.35%'],
                ["style", "left", '31.28%'],
                ["style", "width", '1.5%']
            ],
            "${__4_34Copy}": [
                ["style", "top", '27.27%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.21%'],
                ["style", "left", '5.06%'],
                ["style", "width", '1.28%']
            ],
            "${_show23Copy6}": [
                ["style", "top", '16.88%'],
                ["style", "height", '70.78%'],
                ["style", "left", '15.02%'],
                ["style", "width", '1.73%']
            ],
            "${_show23Copy36}": [
                ["style", "top", '14.61%'],
                ["style", "height", '70.45%'],
                ["style", "left", '57.48%'],
                ["style", "width", '1.53%']
            ],
            "${_show23Copy9}": [
                ["style", "height", '70.13%'],
                ["style", "top", '15.91%'],
                ["style", "left", '22.85%'],
                ["style", "width", '1.9%']
            ],
            "${_show23Copy7}": [
                ["style", "top", '16.56%'],
                ["style", "height", '70.78%'],
                ["style", "left", '17.45%'],
                ["style", "width", '1.6%']
            ],
            "${_show23Copy2}": [
                ["style", "height", '68.18%'],
                ["style", "top", '15.26%'],
                ["style", "left", '4.95%'],
                ["style", "width", '1.71%']
            ],
            "${_show23}": [
                ["style", "height", '67.53%'],
                ["style", "top", '14.94%'],
                ["style", "left", '-0.11%'],
                ["style", "width", '1.72%']
            ],
            "${__4_20Copy}": [
                ["style", "top", '21.55%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '64.94%'],
                ["style", "left", '20.19%'],
                ["style", "width", '1.52%']
            ],
            "${__4_5Copy}": [
                ["style", "top", '29.22%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '49.35%'],
                ["style", "left", '71.79%'],
                ["style", "width", '1.58%']
            ],
            "${__4_23Copy}": [
                ["style", "top", '44.48%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '17.55%'],
                ["style", "left", '39.44%'],
                ["style", "width", '0.58%']
            ],
            "${__4_26Copy}": [
                ["style", "top", '28.25%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.18%'],
                ["style", "left", '28.54%'],
                ["style", "width", '1.27%']
            ],
            "${_show23Copy27}": [
                ["style", "top", '21.1%'],
                ["style", "height", '65.26%'],
                ["style", "left", '74.7%'],
                ["style", "width", '1.72%']
            ],
            "${__4_4Copy}": [
                ["style", "top", '25.97%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '43.83%'],
                ["style", "left", '68.81%'],
                ["style", "width", '1.58%']
            ],
            "${__4_17Copy}": [
                ["style", "top", '30.19%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.86%'],
                ["style", "left", '15.45%'],
                ["style", "width", '0.85%']
            ],
            "${_show23Copy3}": [
                ["style", "top", '15.58%'],
                ["style", "height", '68.18%'],
                ["style", "left", '7.41%'],
                ["style", "width", '1.9%']
            ],
            "${_show23Copy24}": [
                ["style", "top", '12.99%'],
                ["style", "height", '76.3%'],
                ["style", "left", '65.59%'],
                ["style", "width", '1.9%']
            ],
            "${__4_3Copy}": [
                ["style", "top", '31.17%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.21%'],
                ["style", "left", '10.25%'],
                ["style", "width", '1.27%']
            ],
            "${_show23Copy16}": [
                ["style", "height", '59.42%'],
                ["style", "top", '23.05%'],
                ["style", "left", '41.35%'],
                ["style", "width", '1.45%']
            ],
            "${_show23Copy8}": [
                ["style", "top", '13.96%'],
                ["style", "height", '76.3%'],
                ["style", "left", '19.79%'],
                ["style", "width", '2.27%']
            ],
            "${_show23Copy23}": [
                ["style", "height", '74.68%'],
                ["style", "top", '12.99%'],
                ["style", "left", '62.87%'],
                ["style", "width", '1.53%']
            ],
            "${__4_6Copy}": [
                ["style", "top", '32.14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '40.28%'],
                ["style", "left", '74.96%'],
                ["style", "width", '1.17%']
            ],
            "${_show23Copy20}": [
                ["style", "top", '13.96%'],
                ["style", "height", '71.43%'],
                ["style", "left", '52.07%'],
                ["style", "width", '1.53%']
            ],
            "${__4_11Copy}": [
                ["style", "top", '44.81%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '7.18%'],
                ["style", "left", '98.77%'],
                ["style", "width", '0.44%']
            ],
            "${__4_13Copy}": [
                ["style", "top", '39.61%'],
                ["transform", "skewY", '4deg'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '21.37%'],
                ["style", "left", '87.27%'],
                ["style", "width", '0.74%']
            ],
            "${_show23Copy37}": [
                ["style", "top", '24.68%'],
                ["style", "height", '53.57%'],
                ["style", "left", '86.99%'],
                ["style", "width", '1.33%']
            ],
            "${__4_22Copy}": [
                ["style", "top", '41.89%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '20.9%'],
                ["style", "left", '37.06%'],
                ["style", "width", '0.71%']
            ],
            "${__4_8Copy}": [
                ["style", "top", '7.79%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '79.55%'],
                ["style", "left", '81.03%'],
                ["style", "width", '1.71%']
            ],
            "${_show23Copy32}": [
                ["style", "top", '21.1%'],
                ["style", "height", '59.09%'],
                ["style", "left", '91.38%'],
                ["style", "width", '1.33%']
            ],
            "${_show23Copy34}": [
                ["style", "top", '20.45%'],
                ["style", "height", '62.34%'],
                ["style", "left", '96.11%'],
                ["style", "width", '1.33%']
            ],
            "${__4_36Copy}": [
                ["style", "top", '32.47%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '36.8%'],
                ["style", "left", '60.29%'],
                ["style", "width", '1.26%']
            ],
            "${__4_24Copy}": [
                ["style", "top", '37.01%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '27.27%'],
                ["style", "left", '41.74%'],
                ["style", "width", '0.66%']
            ],
            "${_show23Copy}": [
                ["style", "height", '65.26%'],
                ["style", "top", '16.56%'],
                ["style", "left", '2.38%'],
                ["style", "width", '1.71%']
            ],
            "${__4_37Copy}": [
                ["style", "top", '31.82%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '35.06%'],
                ["style", "left", '63%'],
                ["style", "width", '1.18%']
            ],
            "${_show23Copy35}": [
                ["style", "top", '19.16%'],
                ["style", "height", '62.99%'],
                ["style", "left", '98.45%'],
                ["style", "width", '1.33%']
            ],
            "${__4_28Copy}": [
                ["style", "top", '29.87%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.86%'],
                ["style", "left", '34.07%'],
                ["style", "width", '1.5%']
            ],
            "${_show23Copy29}": [
                ["style", "height", '80.52%'],
                ["style", "top", '9.74%'],
                ["style", "left", '80.36%'],
                ["style", "width", '2.8%']
            ],
            "${__4_32Copy}": [
                ["style", "top", '34.42%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '37.33%'],
                ["style", "left", '57.74%'],
                ["style", "width", '0.96%']
            ],
            "${_show23Copy14}": [
                ["style", "top", '23.7%'],
                ["style", "height", '56.49%'],
                ["style", "left", '36.68%'],
                ["style", "width", '1.47%']
            ],
            "${__4_9Copy}": [
                ["style", "top", '36.04%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '33.78%'],
                ["style", "left", '84.53%'],
                ["style", "width", '1.21%']
            ],
            "${_show23Copy28}": [
                ["style", "top", '14.94%'],
                ["style", "height", '74.68%'],
                ["style", "left", '77.46%'],
                ["style", "width", '1.81%']
            ],
            "${symbolSelector}": [
                ["style", "height", '320.83%'],
                ["style", "width", '3273.96%']
            ],
            "${_show23Copy13}": [
                ["style", "height", '69.81%'],
                ["style", "top", '15.26%'],
                ["style", "left", '33.94%'],
                ["style", "width", '1.71%']
            ],
            "${_show23Copy15}": [
                ["style", "height", '60.39%'],
                ["style", "top", '21.75%'],
                ["style", "left", '39.01%'],
                ["style", "width", '1.45%']
            ],
            "${__4_35Copy}": [
                ["style", "top", '32.14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '31.49%'],
                ["style", "left", '55%'],
                ["style", "width", '1.16%']
            ],
            "${__4_30Copy}": [
                ["style", "top", '27.27%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '53.25%'],
                ["style", "left", '46.43%'],
                ["style", "width", '1.3%']
            ],
            "${__4_18Copy}": [
                ["style", "top", '33.12%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '38.4%'],
                ["style", "left", '17.81%'],
                ["style", "width", '0.78%']
            ],
            "${__4_10Copy}": [
                ["style", "top", '44.48%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '13.96%'],
                ["style", "left", '96.52%'],
                ["style", "width", '0.58%']
            ],
            "${__4_1Copy}": [
                ["style", "top", '28.57%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.86%'],
                ["style", "left", '0.09%'],
                ["style", "width", '1.26%']
            ],
            "${_show23Copy26}": [
                ["style", "height", '79.55%'],
                ["style", "top", '12.01%'],
                ["style", "left", '71.64%'],
                ["style", "width", '1.9%']
            ],
            "${_show23Copy5}": [
                ["style", "height", '68.18%'],
                ["style", "top", '17.53%'],
                ["style", "left", '12.65%'],
                ["style", "width", '1.53%']
            ],
            "${__4_31Copy}": [
                ["style", "top", '25%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '50.7%'],
                ["style", "left", '49.4%'],
                ["style", "width", '1.24%']
            ],
            "${__4_25Copy}": [
                ["style", "top", '25.32%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '42.41%'],
                ["style", "left", '25.84%'],
                ["style", "width", '1.37%']
            ],
            "${_show23Copy33}": [
                ["style", "top", '19.81%'],
                ["style", "height", '62.99%'],
                ["style", "left", '93.79%'],
                ["style", "width", '1.33%']
            ],
            "${_show23Copy11}": [
                ["style", "height", '68.18%'],
                ["style", "top", '16.56%'],
                ["style", "left", '28.39%'],
                ["style", "width", '1.71%']
            ],
            "${__4_15Copy}": [
                ["style", "top", '39.94%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '16.76%'],
                ["style", "left", '94.26%'],
                ["style", "width", '0.39%']
            ],
            "${_show23Copy12}": [
                ["style", "top", '14.61%'],
                ["style", "height", '70.78%'],
                ["style", "left", '31.1%'],
                ["style", "width", '1.9%']
            ],
            "${_show23Copy22}": [
                ["style", "top", '15.91%'],
                ["style", "height", '70.45%'],
                ["style", "left", '60.14%'],
                ["style", "width", '1.59%']
            ],
            "${_show23Copy19}": [
                ["style", "top", '15.26%'],
                ["style", "height", '70.13%'],
                ["style", "left", '49.2%'],
                ["style", "width", '1.72%']
            ],
            "${__4_12Copy}": [
                ["style", "top", '41.56%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '16.88%'],
                ["style", "left", '89.67%'],
                ["style", "width", '0.45%']
            ],
            "${__4_27Copy}": [
                ["style", "top", '50.97%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '3.31%'],
                ["style", "left", '44.01%'],
                ["style", "width", '0.62%']
            ],
            "${_show23Copy17}": [
                ["style", "top", '25%'],
                ["style", "height", '56.82%'],
                ["style", "left", '43.71%'],
                ["style", "width", '1.46%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"Ani_5": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'show22',
                    type: 'image',
                    rect: ['0%', '2%', '1.1%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_14Copy',
                    type: 'image',
                    rect: ['0.1%', '16%', '0.9%', '74%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/14/5_14.png', '0px', '0px']
                },
                {
                    id: 'show22Copy',
                    type: 'image',
                    rect: ['1.7%', '2%', '1.1%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_13Copy',
                    type: 'image',
                    rect: ['1.8%', '16.2%', '1%', '66%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/13/5_13.png', '0px', '0px']
                },
                {
                    id: 'show22Copy2',
                    type: 'image',
                    rect: ['3.4%', '2%', '1.1%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_15Copy',
                    type: 'image',
                    rect: ['3.5%', '8.5%', '0.9%', '80.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/15/5_15.png', '0px', '0px']
                },
                {
                    id: 'show22Copy3',
                    type: 'image',
                    rect: ['5.1%', '2%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_16Copy',
                    type: 'image',
                    rect: ['5.2%', '10%', '1%', '80.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/16/5_16.png', '0px', '0px']
                },
                {
                    id: 'show22Copy4',
                    type: 'image',
                    rect: ['6.9%', '2%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_17Copy',
                    type: 'image',
                    rect: ['7%', '21.1%', '0.9%', '66%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/17/5_17.png', '0px', '0px']
                },
                {
                    id: 'show22Copy5',
                    type: 'image',
                    rect: ['8.6%', '0%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_37Copy',
                    type: 'image',
                    rect: ['8.9%', '16%', '0.8%', '60%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/37/5_37.png', '0px', '0px']
                },
                {
                    id: 'show22Copy6',
                    type: 'image',
                    rect: ['10.4%', '0%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_20Copy',
                    type: 'image',
                    rect: ['10.6%', '12.7%', '1%', '74%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/20/5_20.png', '0px', '0px']
                },
                {
                    id: 'show22Copy7',
                    type: 'image',
                    rect: ['12.2%', '0%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_25Copy',
                    type: 'image',
                    rect: ['12.4%', '22%', '1.1%', '54%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/25/5_25.png', '0px', '0px']
                },
                {
                    id: 'show22Copy8',
                    type: 'image',
                    rect: ['14%', '0%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_1Copy',
                    type: 'image',
                    rect: ['14.1%', '17.3%', '1.1%', '61.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/1/5_1.png', '0px', '0px']
                },
                {
                    id: 'show22Copy9',
                    type: 'image',
                    rect: ['15.8%', '2%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_10Copy',
                    type: 'image',
                    rect: ['16%', '16%', '1%', '67.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/10/5_10.png', '0px', '0px']
                },
                {
                    id: 'show22Copy10',
                    type: 'image',
                    rect: ['17.6%', '0%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_11Copy',
                    type: 'image',
                    rect: ['17.7%', '21%', '1%', '54%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/11/5_11.png', '0px', '0px']
                },
                {
                    id: 'show22Copy11',
                    type: 'image',
                    rect: ['19.4%', '2%', '1%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_12Copy',
                    type: 'image',
                    rect: ['19.5%', '23.8%', '0.9%', '54%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/12/5_12.png', '0px', '0px']
                },
                {
                    id: 'show22Copy13',
                    type: 'image',
                    rect: ['21.1%', '2%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_18Copy',
                    type: 'image',
                    rect: ['21.3%', '22.9%', '0.9%', '52%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/18/5_18.png', '0px', '0px']
                },
                {
                    id: 'show22Copy12',
                    type: 'image',
                    rect: ['22.8%', '0%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_19Copy',
                    type: 'image',
                    rect: ['23.1%', '22%', '0.9%', '52.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/19/5_19.png', '0px', '0px']
                },
                {
                    id: 'show22Copy14',
                    type: 'image',
                    rect: ['24.6%', '0%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_2Copy',
                    type: 'image',
                    rect: ['24.8%', '15.1%', '0.9%', '62%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/2/5_2.png', '0px', '0px']
                },
                {
                    id: 'show22Copy16',
                    type: 'image',
                    rect: ['26.3%', '2%', '1.3%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_26Copy',
                    type: 'image',
                    rect: ['26.5%', '6%', '1%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/26/5_26.png', '0px', '0px']
                },
                {
                    id: 'show22Copy15',
                    type: 'image',
                    rect: ['28.2%', '12%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_21Copy',
                    type: 'image',
                    rect: ['28.5%', '32%', '0.6%', '38%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/21/5_21.png', '0px', '0px']
                },
                {
                    id: 'show22Copy17',
                    type: 'image',
                    rect: ['29.7%', '12%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_23Copy',
                    type: 'image',
                    rect: ['29.9%', '38%', '0.4%', '19.2%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/23/5_23.png', '0px', '0px']
                },
                {
                    id: 'show22Copy18',
                    type: 'image',
                    rect: ['31.1%', '14%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_22Copy',
                    type: 'image',
                    rect: ['31.4%', '38.8%', '0.5%', '28%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/22/5_22.png', '0px', '0px']
                },
                {
                    id: 'show22Copy19',
                    type: 'image',
                    rect: ['32.7%', '14%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_24Copy',
                    type: 'image',
                    rect: ['32.9%', '42.3%', '0.5%', '15.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/24/5_24.png', '0px', '0px']
                },
                {
                    id: 'show22Copy20',
                    type: 'image',
                    rect: ['34.3%', '6%', '1.4%', '88%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_27Copy',
                    type: 'image',
                    rect: ['34.6%', '8%', '0.7%', '88%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/27/5_27.png', '0px', '0px']
                },
                {
                    id: 'show22Copy21',
                    type: 'image',
                    rect: ['36.3%', '6%', '1.5%', '88%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_28Copy',
                    type: 'image',
                    rect: ['36.6%', '9.4%', '0.8%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/28/5_28.png', '0px', '0px']
                },
                {
                    id: 'show22Copy22',
                    type: 'image',
                    rect: ['38.5%', '14%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_29Copy',
                    type: 'image',
                    rect: ['38.7%', '34%', '0.7%', '39.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/29/5_29.png', '0px', '0px']
                },
                {
                    id: 'show22Copy23',
                    type: 'image',
                    rect: ['40.2%', '12%', '1.5%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_36Copy',
                    type: 'image',
                    rect: ['40.5%', '0%', '0.8%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/36/5_36.png', '0px', '0px']
                },
                {
                    id: 'show22Copy24',
                    type: 'image',
                    rect: ['42.4%', '0%', '1.8%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_30Copy',
                    type: 'image',
                    rect: ['42.7%', '-4%', '1%', '111%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/30/5_30.png', '0px', '0px']
                },
                {
                    id: 'show22Copy25',
                    type: 'image',
                    rect: ['44.8%', '10%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_3Copy',
                    type: 'image',
                    rect: ['45%', '16.5%', '0.8%', '64.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/3/5_3.png', '0px', '0px']
                },
                {
                    id: 'show22Copy26',
                    type: 'image',
                    rect: ['46.5%', '12%', '0.8%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_31Copy',
                    type: 'image',
                    rect: ['46.6%', '41.7%', '0.6%', '22%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/31/5_31.png', '0px', '0px']
                },
                {
                    id: 'show22Copy27',
                    type: 'image',
                    rect: ['47.8%', '12%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_32Copy',
                    type: 'image',
                    rect: ['48.1%', '42.8%', '0.4%', '24%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/32/5_32.png', '0px', '0px']
                },
                {
                    id: 'show22Copy28',
                    type: 'image',
                    rect: ['49.5%', '12%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_33Copy',
                    type: 'image',
                    rect: ['49.6%', '41.3%', '0.5%', '20.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/33/5_33.png', '0px', '0px']
                },
                {
                    id: 'show22Copy29',
                    type: 'image',
                    rect: ['51.1%', '12%', '1.2%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_34Copy',
                    type: 'image',
                    rect: ['51.6%', '43.7%', '0.4%', '16.7%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/34/5_34.png', '0px', '0px']
                },
                {
                    id: 'show22Copy30',
                    type: 'image',
                    rect: ['52.8%', '12%', '1.2%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_35Copy',
                    type: 'image',
                    rect: ['53.2%', '37.7%', '0.4%', '27%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/35/5_35.png', '0px', '0px']
                },
                {
                    id: 'show22Copy31',
                    type: 'image',
                    rect: ['54.6%', '12%', '1.2%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_38Copy',
                    type: 'image',
                    rect: ['54.8%', '26%', '0.7%', '54%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/38/5_38.png', '0px', '0px']
                },
                {
                    id: 'show22Copy32',
                    type: 'image',
                    rect: ['56.4%', '10%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_39Copy',
                    type: 'image',
                    rect: ['56.6%', '20%', '0.6%', '54%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/39/5_39.png', '0px', '0px']
                },
                {
                    id: 'show22Copy33',
                    type: 'image',
                    rect: ['58.1%', '4%', '1.3%', '92%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_4Copy',
                    type: 'image',
                    rect: ['58.2%', '10%', '0.9%', '76%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/4/5_4.png', '0px', '0px']
                },
                {
                    id: 'show22Copy34',
                    type: 'image',
                    rect: ['60%', '2%', '1.4%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_47Copy',
                    type: 'image',
                    rect: ['60.3%', '12%', '0.8%', '74%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/47/5_47.png', '0px', '0px']
                },
                {
                    id: 'show22Copy35',
                    type: 'image',
                    rect: ['62%', '10%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_40Copy',
                    type: 'image',
                    rect: ['62.3%', '22%', '0.5%', '54%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/40/5_40.png', '0px', '0px']
                },
                {
                    id: 'show22Copy36',
                    type: 'image',
                    rect: ['63.6%', '10%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_41Copy',
                    type: 'image',
                    rect: ['63.8%', '14%', '0.7%', '63.4%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/41/5_41.png', '0px', '0px']
                },
                {
                    id: 'show22Copy37',
                    type: 'image',
                    rect: ['65.2%', '12%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_42Copy',
                    type: 'image',
                    rect: ['65.3%', '22%', '0.9%', '56%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/42/5_42.png', '0px', '0px']
                },
                {
                    id: 'show22Copy38',
                    type: 'image',
                    rect: ['67%', '10%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_43Copy',
                    type: 'image',
                    rect: ['67.1%', '16%', '0.7%', '64%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/43/5_43.png', '0px', '0px']
                },
                {
                    id: 'show22Copy39',
                    type: 'image',
                    rect: ['68.6%', '10%', '1.4%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_44Copy',
                    type: 'image',
                    rect: ['68.9%', '14%', '0.7%', '72%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/44/5_44.png', '0px', '0px']
                },
                {
                    id: 'show22Copy40',
                    type: 'image',
                    rect: ['70.5%', '10%', '1%', '78%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_45Copy',
                    type: 'image',
                    rect: ['70.6%', '26%', '0.9%', '54%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/45/5_45.png', '0px', '0px']
                },
                {
                    id: 'show22Copy41',
                    type: 'image',
                    rect: ['72.2%', '0%', '1.4%', '100%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_55Copy',
                    type: 'image',
                    rect: ['72.4%', '4%', '1%', '92%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/55/5_55.png', '0px', '0px']
                },
                {
                    id: 'show22Copy42',
                    type: 'image',
                    rect: ['74.3%', '0%', '1.4%', '96%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_46Copy',
                    type: 'image',
                    rect: ['74.6%', '10%', '0.8%', '74%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/46/5_46.png', '0px', '0px']
                },
                {
                    id: 'show22Copy43',
                    type: 'image',
                    rect: ['76.3%', '-2%', '1.3%', '106%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_49Copy',
                    type: 'image',
                    rect: ['76.5%', '20%', '1%', '64%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/49/5_49.png', '0px', '0px']
                },
                {
                    id: 'show22Copy44',
                    type: 'image',
                    rect: ['78.3%', '0%', '1.4%', '98%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_48Copy',
                    type: 'image',
                    rect: ['78.5%', '8%', '1%', '82.3%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/48/5_48.png', '0px', '0px']
                },
                {
                    id: 'show22Copy45',
                    type: 'image',
                    rect: ['80.3%', '2%', '1.4%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_5Copy',
                    type: 'image',
                    rect: ['80.5%', '12%', '1%', '74%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/5/5_5.png', '0px', '0px']
                },
                {
                    id: 'show22Copy46',
                    type: 'image',
                    rect: ['82.4%', '2%', '1.4%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_50Copy',
                    type: 'image',
                    rect: ['82.8%', '10%', '0.7%', '74%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/50/5_50.png', '0px', '0px']
                },
                {
                    id: 'show22Copy47',
                    type: 'image',
                    rect: ['84.5%', '2%', '1.4%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_53Copy',
                    type: 'image',
                    rect: ['84.7%', '26%', '0.8%', '46%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/53/5_53.png', '0px', '0px']
                },
                {
                    id: 'show22Copy48',
                    type: 'image',
                    rect: ['86.5%', '2%', '1.4%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_54Copy',
                    type: 'image',
                    rect: ['86.8%', '18%', '0.7%', '62%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/54/5_54.png', '0px', '0px']
                },
                {
                    id: 'show22Copy49',
                    type: 'image',
                    rect: ['88.5%', '2%', '1.4%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_52Copy',
                    type: 'image',
                    rect: ['88.8%', '32%', '0.6%', '35.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/52/5_52.png', '0px', '0px']
                },
                {
                    id: 'show22Copy50',
                    type: 'image',
                    rect: ['90.5%', '4%', '1.4%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_7Copy',
                    type: 'image',
                    rect: ['90.8%', '22%', '0.8%', '55.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/7/5_7.png', '0px', '0px']
                },
                {
                    id: 'show22Copy51',
                    type: 'image',
                    rect: ['92.6%', '4%', '1.4%', '94%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_9Copy',
                    type: 'image',
                    rect: ['92.9%', '14%', '0.9%', '74%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/9/5_9.png', '0px', '0px']
                },
                {
                    id: 'show22Copy52',
                    type: 'image',
                    rect: ['94.7%', '-6%', '1.5%', '112%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_8Copy',
                    type: 'image',
                    rect: ['94.9%', '12%', '1.1%', '72%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/8/5_8.png', '0px', '0px']
                },
                {
                    id: 'show22Copy53',
                    type: 'image',
                    rect: ['96.9%', '-4%', '1.1%', '102%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_51Copy',
                    type: 'image',
                    rect: ['97.1%', '37.8%', '0.6%', '24%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/51/5_51.png', '0px', '0px']
                },
                {
                    id: 'show22Copy54',
                    type: 'image',
                    rect: ['98.6%', '4%', '1.1%', '92%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/img_open.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], ['90']],
                    id: '_5_6Copy',
                    type: 'image',
                    rect: ['98.9%', '32%', '0.6%', '29.5%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/TestChange/5/6/5_6.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__5_17Copy}": [
                ["style", "top", '21.06%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '66%'],
                ["style", "left", '7.02%'],
                ["style", "width", '0.94%']
            ],
            "${__5_37Copy}": [
                ["style", "top", '16%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '60%'],
                ["style", "left", '8.88%'],
                ["style", "width", '0.83%']
            ],
            "${__5_15Copy}": [
                ["style", "top", '8.47%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '80.47%'],
                ["style", "left", '3.52%'],
                ["style", "width", '0.94%']
            ],
            "${__5_54Copy}": [
                ["style", "top", '18%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '62%'],
                ["style", "left", '86.83%'],
                ["style", "width", '0.67%']
            ],
            "${_show22Copy3}": [
                ["style", "top", '2%'],
                ["style", "height", '98%'],
                ["style", "left", '5.1%'],
                ["style", "width", '1.32%']
            ],
            "${_show22Copy44}": [
                ["style", "height", '98%'],
                ["style", "top", '0%'],
                ["style", "left", '78.28%'],
                ["style", "width", '1.36%']
            ],
            "${_show22Copy35}": [
                ["style", "height", '78%'],
                ["style", "top", '10%'],
                ["style", "left", '61.99%'],
                ["style", "width", '1.04%']
            ],
            "${__5_33Copy}": [
                ["style", "top", '41.34%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '20.3%'],
                ["style", "left", '49.58%'],
                ["style", "width", '0.52%']
            ],
            "${__5_20Copy}": [
                ["style", "top", '12.72%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '74%'],
                ["style", "left", '10.61%'],
                ["style", "width", '1.04%']
            ],
            "${_show22}": [
                ["style", "top", '2%'],
                ["style", "height", '98%'],
                ["style", "left", '0%'],
                ["style", "width", '1.11%']
            ],
            "${__5_1Copy}": [
                ["style", "top", '17.31%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '61.69%'],
                ["style", "left", '14.13%'],
                ["style", "width", '1.04%']
            ],
            "${_show22Copy11}": [
                ["style", "height", '98%'],
                ["style", "top", '2%'],
                ["style", "left", '19.38%'],
                ["style", "width", '1.04%']
            ],
            "${_show22Copy34}": [
                ["style", "top", '2%'],
                ["style", "height", '94%'],
                ["style", "left", '60.02%'],
                ["style", "width", '1.36%']
            ],
            "${__5_50Copy}": [
                ["style", "top", '10%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '74%'],
                ["style", "left", '82.78%'],
                ["style", "width", '0.72%']
            ],
            "${__5_21Copy}": [
                ["style", "top", '32%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '38%'],
                ["style", "left", '28.45%'],
                ["style", "width", '0.6%']
            ],
            "${__5_38Copy}": [
                ["style", "top", '26%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '54%'],
                ["style", "left", '54.77%'],
                ["style", "width", '0.74%']
            ],
            "${__5_27Copy}": [
                ["style", "top", '8%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '88%'],
                ["style", "left", '34.59%'],
                ["style", "width", '0.74%']
            ],
            "${_show22Copy7}": [
                ["style", "top", '0%'],
                ["style", "height", '98%'],
                ["style", "left", '12.24%'],
                ["style", "width", '1.32%']
            ],
            "${__5_13Copy}": [
                ["style", "top", '16.16%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '66%'],
                ["style", "left", '1.77%'],
                ["style", "width", '0.96%']
            ],
            "${__5_11Copy}": [
                ["style", "top", '20.97%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '54%'],
                ["style", "left", '17.69%'],
                ["style", "width", '0.95%']
            ],
            "${_show22Copy48}": [
                ["style", "height", '94%'],
                ["style", "top", '2%'],
                ["style", "left", '86.49%'],
                ["style", "width", '1.35%']
            ],
            "${_show22Copy46}": [
                ["style", "height", '94%'],
                ["style", "top", '2%'],
                ["style", "left", '82.43%'],
                ["style", "width", '1.35%']
            ],
            "${_show22Copy22}": [
                ["style", "top", '14%'],
                ["style", "height", '78%'],
                ["style", "left", '38.51%'],
                ["style", "width", '1.01%']
            ],
            "${_show22Copy17}": [
                ["style", "height", '78%'],
                ["style", "top", '12%'],
                ["style", "left", '29.66%'],
                ["style", "width", '1.01%']
            ],
            "${__5_25Copy}": [
                ["style", "top", '22%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '54%'],
                ["style", "left", '12.36%'],
                ["style", "width", '1.08%']
            ],
            "${_show22Copy21}": [
                ["style", "top", '6%'],
                ["style", "height", '88%'],
                ["style", "left", '36.31%'],
                ["style", "width", '1.5%']
            ],
            "${__5_43Copy}": [
                ["style", "top", '16%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '64%'],
                ["style", "left", '67.13%'],
                ["style", "width", '0.74%']
            ],
            "${_show22Copy49}": [
                ["style", "top", '2%'],
                ["style", "height", '94%'],
                ["style", "left", '88.5%'],
                ["style", "width", '1.35%']
            ],
            "${_show22Copy33}": [
                ["style", "top", '4%'],
                ["style", "height", '92%'],
                ["style", "left", '58.11%'],
                ["style", "width", '1.26%']
            ],
            "${__5_32Copy}": [
                ["style", "top", '42.78%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '24%'],
                ["style", "left", '48.08%'],
                ["style", "width", '0.36%']
            ],
            "${__5_30Copy}": [
                ["style", "top", '-4%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '111%'],
                ["style", "left", '42.7%'],
                ["style", "width", '1.04%']
            ],
            "${_show22Copy30}": [
                ["style", "height", '78%'],
                ["style", "top", '12%'],
                ["style", "left", '52.83%'],
                ["style", "width", '1.21%']
            ],
            "${__5_39Copy}": [
                ["style", "top", '20%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '54%'],
                ["style", "left", '56.56%'],
                ["style", "width", '0.61%']
            ],
            "${__5_7Copy}": [
                ["style", "top", '22%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '55.47%'],
                ["style", "left", '90.81%'],
                ["style", "width", '0.81%']
            ],
            "${__5_34Copy}": [
                ["style", "top", '43.69%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '16.69%'],
                ["style", "left", '51.6%'],
                ["style", "width", '0.35%']
            ],
            "${__5_40Copy}": [
                ["style", "top", '22%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '54%'],
                ["style", "left", '62.26%'],
                ["style", "width", '0.46%']
            ],
            "${__5_48Copy}": [
                ["style", "top", '8%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '82.29%'],
                ["transform", "skewX", '0deg'],
                ["style", "left", '78.48%'],
                ["style", "width", '0.97%']
            ],
            "${__5_35Copy}": [
                ["style", "top", '37.69%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '26.97%'],
                ["style", "left", '53.24%'],
                ["style", "width", '0.35%']
            ],
            "${_show22Copy13}": [
                ["style", "height", '98%'],
                ["style", "top", '2%'],
                ["style", "left", '21.1%'],
                ["style", "width", '1.32%']
            ],
            "${__5_2Copy}": [
                ["style", "top", '15.06%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '62%'],
                ["style", "left", '24.77%'],
                ["style", "width", '0.92%']
            ],
            "${_show22Copy31}": [
                ["style", "top", '12%'],
                ["style", "height", '78%'],
                ["style", "left", '54.57%'],
                ["style", "width", '1.21%']
            ],
            "${__5_16Copy}": [
                ["style", "top", '9.97%'],
                ["transform", "skewY", '0deg'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '80.69%'],
                ["style", "left", '5.23%'],
                ["style", "width", '1.01%']
            ],
            "${__5_53Copy}": [
                ["style", "top", '26%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '46%'],
                ["style", "left", '84.72%'],
                ["style", "width", '0.83%']
            ],
            "${__5_26Copy}": [
                ["style", "top", '6%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '94%'],
                ["style", "left", '26.49%'],
                ["style", "width", '0.96%']
            ],
            "${_show22Copy27}": [
                ["style", "height", '78%'],
                ["style", "top", '12%'],
                ["style", "left", '47.84%'],
                ["style", "width", '1.04%']
            ],
            "${_show22Copy}": [
                ["style", "height", '98%'],
                ["style", "top", '2%'],
                ["style", "left", '1.72%'],
                ["style", "width", '1.09%']
            ],
            "${__5_19Copy}": [
                ["style", "top", '22%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '52.83%'],
                ["style", "left", '23.06%'],
                ["style", "width", '0.89%']
            ],
            "${__5_44Copy}": [
                ["style", "top", '14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '72%'],
                ["style", "left", '68.92%'],
                ["style", "width", '0.68%']
            ],
            "${__5_10Copy}": [
                ["style", "top", '16%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '67.31%'],
                ["style", "left", '15.97%'],
                ["style", "width", '0.95%']
            ],
            "${__5_55Copy}": [
                ["style", "top", '4%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '92%'],
                ["style", "left", '72.43%'],
                ["style", "width", '0.99%']
            ],
            "${_show22Copy24}": [
                ["style", "top", '0%'],
                ["style", "height", '100%'],
                ["style", "left", '42.38%'],
                ["style", "width", '1.75%']
            ],
            "${_show22Copy12}": [
                ["style", "height", '98%'],
                ["style", "top", '0%'],
                ["style", "left", '22.82%'],
                ["style", "width", '1.32%']
            ],
            "${_show22Copy39}": [
                ["style", "height", '78%'],
                ["style", "top", '10%'],
                ["style", "left", '68.55%'],
                ["style", "width", '1.35%']
            ],
            "${_show22Copy15}": [
                ["style", "top", '12%'],
                ["style", "height", '78%'],
                ["style", "left", '28.18%'],
                ["style", "width", '1.01%']
            ],
            "${__5_29Copy}": [
                ["style", "top", '34%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '39.36%'],
                ["style", "left", '38.68%'],
                ["style", "width", '0.7%']
            ],
            "${__5_46Copy}": [
                ["style", "top", '10%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '74%'],
                ["style", "left", '74.57%'],
                ["style", "width", '0.83%']
            ],
            "${__5_23Copy}": [
                ["style", "top", '38%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '19.16%'],
                ["style", "left", '29.93%'],
                ["style", "width", '0.44%']
            ],
            "${_show22Copy41}": [
                ["style", "height", '100%'],
                ["style", "top", '0%'],
                ["style", "left", '72.24%'],
                ["style", "width", '1.36%']
            ],
            "${_show22Copy9}": [
                ["style", "height", '98%'],
                ["style", "top", '2%'],
                ["style", "left", '15.77%'],
                ["style", "width", '1.32%']
            ],
            "${__5_14Copy}": [
                ["style", "top", '16%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '74%'],
                ["style", "left", '0.07%'],
                ["style", "width", '0.86%']
            ],
            "${__5_4Copy}": [
                ["style", "top", '10%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '76%'],
                ["style", "left", '58.21%'],
                ["style", "width", '0.92%']
            ],
            "${_show22Copy20}": [
                ["style", "height", '88%'],
                ["style", "top", '6%'],
                ["style", "left", '34.3%'],
                ["style", "width", '1.36%']
            ],
            "${_show22Copy26}": [
                ["style", "height", '78%'],
                ["style", "top", '12%'],
                ["style", "left", '46.49%'],
                ["style", "width", '0.79%']
            ],
            "${_show22Copy36}": [
                ["style", "height", '78%'],
                ["style", "top", '10%'],
                ["style", "left", '63.64%'],
                ["style", "width", '1.04%']
            ],
            "${_show22Copy8}": [
                ["style", "height", '98%'],
                ["style", "top", '0%'],
                ["style", "left", '14%'],
                ["style", "width", '1.32%']
            ],
            "${_show22Copy2}": [
                ["style", "height", '98%'],
                ["style", "top", '2%'],
                ["style", "left", '3.42%'],
                ["style", "width", '1.06%']
            ],
            "${_show22Copy43}": [
                ["style", "top", '-2%'],
                ["style", "height", '106%'],
                ["style", "left", '76.34%'],
                ["style", "width", '1.26%']
            ],
            "${_show22Copy53}": [
                ["style", "top", '-4%'],
                ["style", "height", '102%'],
                ["style", "left", '96.86%'],
                ["style", "width", '1.11%']
            ],
            "${_show22Copy40}": [
                ["style", "top", '10%'],
                ["style", "height", '78%'],
                ["style", "left", '70.52%'],
                ["style", "width", '1.04%']
            ],
            "${__5_6Copy}": [
                ["style", "top", '32%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '29.53%'],
                ["style", "left", '98.85%'],
                ["style", "width", '0.55%']
            ],
            "${__5_18Copy}": [
                ["style", "top", '22.88%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '52%'],
                ["style", "left", '21.3%'],
                ["style", "width", '0.86%']
            ],
            "${__5_12Copy}": [
                ["style", "top", '23.84%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '54%'],
                ["style", "left", '19.49%'],
                ["style", "width", '0.86%']
            ],
            "${__5_42Copy}": [
                ["style", "top", '22%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '56%'],
                ["style", "left", '65.33%'],
                ["style", "width", '0.86%']
            ],
            "${__5_41Copy}": [
                ["style", "top", '14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '63.41%'],
                ["style", "left", '63.78%'],
                ["style", "width", '0.72%']
            ],
            "${_show22Copy42}": [
                ["style", "height", '96%'],
                ["style", "top", '0%'],
                ["style", "left", '74.3%'],
                ["style", "width", '1.36%']
            ],
            "${_show22Copy28}": [
                ["style", "top", '12%'],
                ["style", "height", '78%'],
                ["style", "left", '49.46%'],
                ["style", "width", '1.04%']
            ],
            "${_show22Copy45}": [
                ["style", "top", '2%'],
                ["style", "height", '94%'],
                ["style", "left", '80.32%'],
                ["style", "width", '1.35%']
            ],
            "${_show22Copy5}": [
                ["style", "height", '98%'],
                ["style", "top", '0%'],
                ["style", "left", '8.63%'],
                ["style", "width", '1.32%']
            ],
            "${_show22Copy50}": [
                ["style", "top", '4%'],
                ["style", "height", '94%'],
                ["style", "left", '90.54%'],
                ["style", "width", '1.35%']
            ],
            "${_show22Copy47}": [
                ["style", "top", '2%'],
                ["style", "height", '94%'],
                ["style", "left", '84.47%'],
                ["style", "width", '1.35%']
            ],
            "${_show22Copy32}": [
                ["style", "height", '78%'],
                ["style", "top", '10%'],
                ["style", "left", '56.36%'],
                ["style", "width", '1.04%']
            ],
            "${__5_45Copy}": [
                ["style", "top", '26%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '54%'],
                ["style", "left", '70.59%'],
                ["style", "width", '0.87%']
            ],
            "${_show22Copy18}": [
                ["style", "height", '78%'],
                ["style", "top", '14%'],
                ["style", "left", '31.13%'],
                ["style", "width", '1.01%']
            ],
            "${_show22Copy16}": [
                ["style", "height", '98%'],
                ["style", "top", '2%'],
                ["style", "left", '26.32%'],
                ["style", "width", '1.32%']
            ],
            "${__5_47Copy}": [
                ["style", "top", '12%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '74%'],
                ["style", "left", '60.29%'],
                ["style", "width", '0.78%']
            ],
            "${_show22Copy19}": [
                ["style", "height", '78%'],
                ["style", "top", '14%'],
                ["style", "left", '32.68%'],
                ["style", "width", '1.01%']
            ],
            "${__5_51Copy}": [
                ["style", "top", '37.84%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '24%'],
                ["style", "left", '97.13%'],
                ["style", "width", '0.61%']
            ],
            "${__5_22Copy}": [
                ["style", "top", '38.78%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '28%'],
                ["style", "left", '31.4%'],
                ["style", "width", '0.49%']
            ],
            "${__5_31Copy}": [
                ["style", "top", '41.69%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '22%'],
                ["style", "left", '46.56%'],
                ["style", "width", '0.55%']
            ],
            "${_show22Copy29}": [
                ["style", "top", '12%'],
                ["style", "height", '78%'],
                ["style", "left", '51.06%'],
                ["style", "width", '1.21%']
            ],
            "${__5_8Copy}": [
                ["style", "top", '12%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '72%'],
                ["style", "left", '94.94%'],
                ["style", "width", '1.05%']
            ],
            "${_show22Copy52}": [
                ["style", "height", '112%'],
                ["style", "top", '-6%'],
                ["style", "left", '94.67%'],
                ["style", "width", '1.5%']
            ],
            "${_show22Copy6}": [
                ["style", "top", '0%'],
                ["style", "height", '98%'],
                ["style", "left", '10.42%'],
                ["style", "width", '1.32%']
            ],
            "${symbolSelector}": [
                ["style", "height", '52.46%'],
                ["style", "width", '1211.25%']
            ],
            "${__5_3Copy}": [
                ["style", "top", '16.47%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '64.75%'],
                ["style", "left", '44.97%'],
                ["style", "width", '0.75%']
            ],
            "${__5_36Copy}": [
                ["style", "top", '0%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '98%'],
                ["style", "left", '40.54%'],
                ["style", "width", '0.77%']
            ],
            "${_show22Copy10}": [
                ["style", "top", '0%'],
                ["style", "height", '98%'],
                ["style", "left", '17.57%'],
                ["style", "width", '1.32%']
            ],
            "${__5_24Copy}": [
                ["style", "top", '42.28%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '15.72%'],
                ["style", "left", '32.87%'],
                ["style", "width", '0.49%']
            ],
            "${_show22Copy23}": [
                ["style", "height", '78%'],
                ["style", "top", '12%'],
                ["style", "left", '40.2%'],
                ["style", "width", '1.5%']
            ],
            "${_show22Copy38}": [
                ["style", "height", '78%'],
                ["style", "top", '10%'],
                ["style", "left", '66.95%'],
                ["style", "width", '1.04%']
            ],
            "${_show22Copy4}": [
                ["style", "top", '2%'],
                ["style", "height", '98%'],
                ["style", "left", '6.85%'],
                ["style", "width", '1.32%']
            ],
            "${__5_52Copy}": [
                ["style", "top", '32%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '35.54%'],
                ["style", "left", '88.82%'],
                ["style", "width", '0.62%']
            ],
            "${_show22Copy25}": [
                ["style", "top", '10%'],
                ["style", "height", '78%'],
                ["style", "left", '44.75%'],
                ["style", "width", '1.04%']
            ],
            "${_show22Copy54}": [
                ["style", "height", '92%'],
                ["style", "top", '4%'],
                ["style", "left", '98.6%'],
                ["style", "width", '1.11%']
            ],
            "${__5_5Copy}": [
                ["style", "top", '12%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '74%'],
                ["style", "left", '80.47%'],
                ["style", "width", '0.96%']
            ],
            "${_show22Copy14}": [
                ["style", "top", '0%'],
                ["style", "height", '98%'],
                ["style", "left", '24.57%'],
                ["style", "width", '1.32%']
            ],
            "${__5_28Copy}": [
                ["style", "top", '9.38%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '78%'],
                ["style", "left", '36.56%'],
                ["style", "width", '0.84%']
            ],
            "${__5_9Copy}": [
                ["style", "top", '14%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '74%'],
                ["style", "left", '92.85%'],
                ["style", "width", '0.86%']
            ],
            "${_show22Copy51}": [
                ["style", "top", '4%'],
                ["style", "height", '94%'],
                ["style", "left", '92.6%'],
                ["style", "width", '1.35%']
            ],
            "${__5_49Copy}": [
                ["style", "top", '20%'],
                ["transform", "rotateZ", '90deg'],
                ["style", "height", '64%'],
                ["style", "left", '76.46%'],
                ["style", "width", '1%']
            ],
            "${_show22Copy37}": [
                ["style", "top", '12%'],
                ["style", "height", '78%'],
                ["style", "left", '65.23%'],
                ["style", "width", '1.04%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: true,
            timeline: [
            ]
        }
    }
},
"repaly_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'replay',
                    type: 'image',
                    rect: ['-0.2%', '0%', '100.1%', '99.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/buttan/again_P.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_replay}": [
                ["style", "top", '0%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '99.76%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-0.22%'],
                ["style", "width", '100.07%']
            ],
            "${symbolSelector}": [
                ["style", "height", '19.69%'],
                ["style", "width", '13.55%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid549", tween: [ "transform", "${_replay}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid550", tween: [ "transform", "${_replay}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid551", tween: [ "transform", "${_replay}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid552", tween: [ "transform", "${_replay}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
        }
    }
},
"more_sym": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    id: 'more',
                    type: 'image',
                    rect: ['0%', '0%', '100.1%', '99.8%', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/buttan/game_M.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_more}": [
                ["style", "top", '0.02%'],
                ["transform", "scaleY", '1'],
                ["style", "height", '99.76%'],
                ["transform", "scaleX", '1'],
                ["style", "left", '-0.02%'],
                ["style", "width", '100.07%']
            ],
            "${symbolSelector}": [
                ["style", "height", '19.69%'],
                ["style", "width", '13.55%']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: true,
            timeline: [
                { id: "eid559", tween: [ "transform", "${_more}", "scaleX", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid560", tween: [ "transform", "${_more}", "scaleX", '1', { fromValue: '0.8'}], position: 500, duration: 500 },
                { id: "eid561", tween: [ "transform", "${_more}", "scaleY", '0.8', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "eid562", tween: [ "transform", "${_more}", "scaleY", '1', { fromValue: '0.8'}], position: 500, duration: 500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5709268985");
