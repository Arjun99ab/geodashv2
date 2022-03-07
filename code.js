var p5Inst = new p5(null, "sketch");

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {
    orderedKeys: [
      "9c879663-9b2d-4e32-8cf9-23bcfa7b740c",
      "f1a3a506-db6b-4c2b-a54f-79bb49fd1508",
      "3f569b8e-7529-4f49-b748-590e78f20e61",
      "a7e36cc2-8853-4f2c-972a-6035be21770d",
      "dd118633-9e87-40cc-a19b-4037dc6b2521",
      "7a70a194-5881-42ff-8010-2259c999b2fe",
      "76b1ab0c-50aa-47c0-b4fd-e3a403fa0389",
      "65418daf-1bd2-4f00-a7c1-0b6e49b59c25",
      "7b881395-b075-48fe-86df-5713f86da656",
      "ac977096-9966-440c-915f-89079e2f0bd1",
      "a90184b4-0941-490c-8555-b8938c35cc89",
      "e3c661be-49eb-4c5d-8245-25edf5877d77",
      "15599ea7-01e3-4b2a-b0da-a4889bf26a9e",
      "d383e3c7-bbf2-48cc-bc65-ba0c959a57ea",
      "a954e72e-e10c-442f-8c92-be669a563a7d",
      "2a3df283-f7e8-43fb-9770-329b1ecc343d",
      "c5655e3c-234a-471b-b1c2-079f00025286",
      "7bd97f65-622a-44a3-a464-98d205e6f060",
      "78dd124f-901b-4512-93f2-300c0131c5f5",
      "a32e6d2a-4baa-44f6-a8a5-1ca7a9419559",
      "a9484854-64a9-493c-9e7b-990f83a76ae7",
      "6bff5a52-9a76-4c7c-9563-ade13cf22976",
      "20a94c7f-5848-41f0-a0df-2b91ff29099b",
      "78e8e0dd-275b-49f9-9ade-9b87f266b87c",
      "e73f9535-dc92-4a65-b1ac-70cda9a44260",
      "10e97bf4-2b63-40da-a22f-63662d143c1f",
      "0a20d4fe-422c-4de2-a83a-af698897ff03",
      "f9d97e4a-1746-4ee6-9cfd-c9322281642b",
      "affe0f1e-cc7e-41cb-a84d-d78cc74a065a",
      "f4039033-50c5-44db-b708-4870777a6fff",
      "1b47fe5b-20a2-4e19-af55-5a7d93a06c44",
      "26672980-531b-457a-ab4f-f201c095eb85",
      "ce9f41cd-4200-4135-bb6c-fbf0449cb509",
      "df9eddea-87c8-4b37-a03a-70db81d34719",
      "2d5890e8-00bb-4c43-b2a8-21d9cb659934",
      "2740bca7-a69f-4b7c-b81c-45acf44079f8",
      "c706ea21-bcc8-476f-a3a0-8e602923be42",
      "5333550a-b537-469c-84ad-2e076f85bc46",
      "fea6cda7-9769-4a32-a75a-077feb8ed39e",
      "1ce78065-e196-4140-b9e2-fda5ba1288f1",
      "5f20c935-569f-49b1-a4af-d52f150d3f54",
      "7b094a99-97a5-4454-a785-615fb79c8b10",
      "01187757-8f60-4a8b-ba47-4de4178d5dbf",
      "696f239e-8f60-4bd0-978c-8dc40c1c5b1f",
      "3dfba314-4421-4377-bcf1-c2c9a5774959",
      "7164313e-86c2-4282-93c0-340490b40274",
      "f8af504e-07e4-4ec4-a237-8adcdf9a4739",
      "b5f8cb21-c1e9-4d99-bc2f-6179cf656563",
      "8915e286-3b3f-4241-b585-4e8709769eb6",
      "fc9fe3bc-18e5-40b9-812a-92b7f408bd4b",
      "a58d242a-2108-40e6-a523-17ce7bf991d3"
    ],
    propsByKey: {
      "9c879663-9b2d-4e32-8cf9-23bcfa7b740c": {
        name: "bg",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/9c879663-9b2d-4e32-8cf9-23bcfa7b740c.png",
        frameSize: { x: 500, y: 500 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "3rYkd4Pc1YAZ9FbA5EpfTjsX46UOmZRi",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 500, y: 500 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/9c879663-9b2d-4e32-8cf9-23bcfa7b740c.png"
      },
      "f1a3a506-db6b-4c2b-a54f-79bb49fd1508": {
        name: "bgFlipped",
        sourceUrl: null,
        frameSize: { x: 500, y: 500 },
        frameCount: 1,
        looping: true,
        frameDelay: 12,
        version: "dt5.5kMuwBgsJKGZDx3zpyiHsgXHxNgE",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 500, y: 500 },
        rootRelativePath: "assets/f1a3a506-db6b-4c2b-a54f-79bb49fd1508.png"
      },
      "3f569b8e-7529-4f49-b748-590e78f20e61": {
        name: "bgUpsideDown",
        sourceUrl: null,
        frameSize: { x: 500, y: 500 },
        frameCount: 1,
        looping: true,
        frameDelay: 12,
        version: "LqLd0Wvzs9aKrUSKABc.uK.wsBM681Zj",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 500, y: 500 },
        rootRelativePath: "assets/3f569b8e-7529-4f49-b748-590e78f20e61.png"
      },
      "a7e36cc2-8853-4f2c-972a-6035be21770d": {
        name: "bgFlippedUpsideDown",
        sourceUrl: null,
        frameSize: { x: 500, y: 500 },
        frameCount: 1,
        looping: true,
        frameDelay: 12,
        version: "1bv3OGsKnW_Mf74dC.HIAANjtjQUSKcO",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 500, y: 500 },
        rootRelativePath: "assets/a7e36cc2-8853-4f2c-972a-6035be21770d.png"
      },
      "dd118633-9e87-40cc-a19b-4037dc6b2521": {
        name: "block",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/dd118633-9e87-40cc-a19b-4037dc6b2521.png",
        frameSize: { x: 100, y: 100 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "RGnzX6GfieHQiKIYEw.VXZIy15_.XdE6",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 100, y: 100 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/dd118633-9e87-40cc-a19b-4037dc6b2521.png"
      },
      "7a70a194-5881-42ff-8010-2259c999b2fe": {
        name: "cube",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7a70a194-5881-42ff-8010-2259c999b2fe.png",
        frameSize: { x: 499, y: 500 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "nYosEKhLPZXTMtzKr_UGJnplBkfo.Ks2",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 499, y: 500 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7a70a194-5881-42ff-8010-2259c999b2fe.png"
      },
      "76b1ab0c-50aa-47c0-b4fd-e3a403fa0389": {
        name: "spike",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/76b1ab0c-50aa-47c0-b4fd-e3a403fa0389.png",
        frameSize: { x: 122, y: 122 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "VpZ1yocRv3phj5cZSl5M8GIlzSYasL.l",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 122, y: 122 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/76b1ab0c-50aa-47c0-b4fd-e3a403fa0389.png"
      },
      "65418daf-1bd2-4f00-a7c1-0b6e49b59c25": {
        name: "respawningtext",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/65418daf-1bd2-4f00-a7c1-0b6e49b59c25.png",
        frameSize: { x: 640, y: 84 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "z6AESbLVkI0owOMgYz64mMLNQ30RoHsQ",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 640, y: 84 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/65418daf-1bd2-4f00-a7c1-0b6e49b59c25.png"
      },
      "7b881395-b075-48fe-86df-5713f86da656": {
        name: "levelcomp",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7b881395-b075-48fe-86df-5713f86da656.png",
        frameSize: { x: 1431, y: 179 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "tEkrYVqPTI1jXAVIFpRJLF2O9CCFuQmp",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1431, y: 179 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7b881395-b075-48fe-86df-5713f86da656.png"
      },
      "ac977096-9966-440c-915f-89079e2f0bd1": {
        name: "browsinglevelbg",
        sourceUrl: null,
        frameSize: { x: 100, y: 100 },
        frameCount: 1,
        looping: true,
        frameDelay: 12,
        version: "mX3VAga3KcEmaTpzdBFoo1H3Ofgd9keD",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 100, y: 100 },
        rootRelativePath: "assets/ac977096-9966-440c-915f-89079e2f0bd1.png"
      },
      "a90184b4-0941-490c-8555-b8938c35cc89": {
        name: "browsingleveltopbar",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a90184b4-0941-490c-8555-b8938c35cc89.png",
        frameSize: { x: 1197, y: 126 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "MhTIE3vE9IeZhrWzk0aWL3Ks6FkLMjZ7",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1197, y: 126 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a90184b4-0941-490c-8555-b8938c35cc89.png"
      },
      "e3c661be-49eb-4c5d-8245-25edf5877d77": {
        name: "browsinglevelcorner",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/e3c661be-49eb-4c5d-8245-25edf5877d77.png",
        frameSize: { x: 285, y: 279 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "JL4t9ZhpFF8xS.lgNnn4cQVvuVIQeRHd",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 285, y: 279 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/e3c661be-49eb-4c5d-8245-25edf5877d77.png"
      },
      "15599ea7-01e3-4b2a-b0da-a4889bf26a9e": {
        name: "browsinglevelcornerflipped",
        sourceUrl: null,
        frameSize: { x: 285, y: 279 },
        frameCount: 1,
        looping: true,
        frameDelay: 12,
        version: "SbxEX0hYVOSZ62oAd3yk1PI7.j.PBPmQ",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 285, y: 279 },
        rootRelativePath: "assets/15599ea7-01e3-4b2a-b0da-a4889bf26a9e.png"
      },
      "d383e3c7-bbf2-48cc-bc65-ba0c959a57ea": {
        name: "mainmenuicons",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/d383e3c7-bbf2-48cc-bc65-ba0c959a57ea.png",
        frameSize: { x: 264, y: 264 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "8eb5SYN1ceKvsDKnJnulXaTRk19NaqIU",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 264, y: 264 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/d383e3c7-bbf2-48cc-bc65-ba0c959a57ea.png"
      },
      "a954e72e-e10c-442f-8c92-be669a563a7d": {
        name: "mainmenuplay",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a954e72e-e10c-442f-8c92-be669a563a7d.png",
        frameSize: { x: 416, y: 415 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "3AFiOF7TyNcNJ0Zk_8UPK5OH1C0jSOfU",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 416, y: 415 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a954e72e-e10c-442f-8c92-be669a563a7d.png"
      },
      "2a3df283-f7e8-43fb-9770-329b1ecc343d": {
        name: "browsinglevelnextarrowright",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/2a3df283-f7e8-43fb-9770-329b1ecc343d.png",
        frameSize: { x: 105, y: 216 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "Xe4w0nOTUJETHlvVfb9vhVt5LuDrevac",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 105, y: 216 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/2a3df283-f7e8-43fb-9770-329b1ecc343d.png"
      },
      "c5655e3c-234a-471b-b1c2-079f00025286": {
        name: "browsinglevelnextarrowleft",
        sourceUrl: null,
        frameSize: { x: 105, y: 216 },
        frameCount: 1,
        looping: true,
        frameDelay: 12,
        version: "1imO_pe4HxiiG7CX412GC8ynKK2OnwXw",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 105, y: 216 },
        rootRelativePath: "assets/c5655e3c-234a-471b-b1c2-079f00025286.png"
      },
      "7bd97f65-622a-44a3-a464-98d205e6f060": {
        name: "geodashlogo",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7bd97f65-622a-44a3-a464-98d205e6f060.png",
        frameSize: { x: 850, y: 110 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "RjDq9JanANDSO3RRCUeo2auJlqhi6eFB",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 850, y: 110 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7bd97f65-622a-44a3-a464-98d205e6f060.png"
      },
      "78dd124f-901b-4512-93f2-300c0131c5f5": {
        name: "restartbutton",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/78dd124f-901b-4512-93f2-300c0131c5f5.png",
        frameSize: { x: 242, y: 244 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "ZlBk8dMlNXKrBWBMyfDN5K9tuVVUm59F",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 242, y: 244 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/78dd124f-901b-4512-93f2-300c0131c5f5.png"
      },
      "a32e6d2a-4baa-44f6-a8a5-1ca7a9419559": {
        name: "menubutton",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a32e6d2a-4baa-44f6-a8a5-1ca7a9419559.png",
        frameSize: { x: 240, y: 244 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "4WkDLXn0efXRpkvAfjHNirMYQOvHrEiA",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 240, y: 244 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a32e6d2a-4baa-44f6-a8a5-1ca7a9419559.png"
      },
      "a9484854-64a9-493c-9e7b-990f83a76ae7": {
        name: "levelcomptopbar",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a9484854-64a9-493c-9e7b-990f83a76ae7.png",
        frameSize: { x: 1575, y: 142 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "ZUniWwZCQUwCNclj_Kap9jglPFf2z2Xi",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1575, y: 142 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a9484854-64a9-493c-9e7b-990f83a76ae7.png"
      },
      "6bff5a52-9a76-4c7c-9563-ade13cf22976": {
        name: "levelcompbottombar",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/6bff5a52-9a76-4c7c-9563-ade13cf22976.png",
        frameSize: { x: 1559, y: 142 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "ei46vlt0sDttfYCPhZj6EX.vwAwRCvsw",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1559, y: 142 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/6bff5a52-9a76-4c7c-9563-ade13cf22976.png"
      },
      "20a94c7f-5848-41f0-a0df-2b91ff29099b": {
        name: "levelcompsidebarright",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/20a94c7f-5848-41f0-a0df-2b91ff29099b.png",
        frameSize: { x: 75, y: 1577 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "BhKWBzfCdwrI9Ueq_t8_l68hdQxZZq1B",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 75, y: 1577 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/20a94c7f-5848-41f0-a0df-2b91ff29099b.png"
      },
      "78e8e0dd-275b-49f9-9ade-9b87f266b87c": {
        name: "levelcompsidebarleft",
        sourceUrl: null,
        frameSize: { x: 75, y: 1577 },
        frameCount: 1,
        looping: true,
        frameDelay: 12,
        version: "Hk6hXSR6qZTK2XhVDXdoYf121_VZXp7C",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 75, y: 1577 },
        rootRelativePath: "assets/78e8e0dd-275b-49f9-9ade-9b87f266b87c.png"
      },
      "e73f9535-dc92-4a65-b1ac-70cda9a44260": {
        name: "progresstext",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/e73f9535-dc92-4a65-b1ac-70cda9a44260.png",
        frameSize: { x: 646, y: 104 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "7mMqaWnFdZ0p7tk_dtXV5asuzYwPbf4E",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 646, y: 104 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/e73f9535-dc92-4a65-b1ac-70cda9a44260.png"
      },
      "10e97bf4-2b63-40da-a22f-63662d143c1f": {
        name: "stereohalfness",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/10e97bf4-2b63-40da-a22f-63662d143c1f.png",
        frameSize: { x: 1149, y: 107 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "jYaRbfcL_Q6hxY.gKSZdbKSIOtWsYhQD",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1149, y: 107 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/10e97bf4-2b63-40da-a22f-63662d143c1f.png"
      },
      "0a20d4fe-422c-4de2-a83a-af698897ff03": {
        name: "browsinglevelbox",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/0a20d4fe-422c-4de2-a83a-af698897ff03.png",
        frameSize: { x: 100, y: 100 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "rIzlVz8n.wgwwLcIpFK.qf9gTHvUv6eC",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 100, y: 100 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/0a20d4fe-422c-4de2-a83a-af698897ff03.png"
      },
      "f9d97e4a-1746-4ee6-9cfd-c9322281642b": {
        name: "levelcompbox",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/f9d97e4a-1746-4ee6-9cfd-c9322281642b.png",
        frameSize: { x: 100, y: 100 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "kv.wlzHPPReMNL3KZ.cZ5KC2cFOgbzzf",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 100, y: 100 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/f9d97e4a-1746-4ee6-9cfd-c9322281642b.png"
      },
      "affe0f1e-cc7e-41cb-a84d-d78cc74a065a": {
        name: "easyface",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/affe0f1e-cc7e-41cb-a84d-d78cc74a065a.png",
        frameSize: { x: 121, y: 122 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: ".ochbUBe1kGuGZv3G._qFNGJn9JUnmJn",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 121, y: 122 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/affe0f1e-cc7e-41cb-a84d-d78cc74a065a.png"
      },
      "f4039033-50c5-44db-b708-4870777a6fff": {
        name: "browsinglevelbackarrow",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/f4039033-50c5-44db-b708-4870777a6fff.png",
        frameSize: { x: 122, y: 151 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "f2Z_iANquyjdI5rDBCrlAIssqo_eVmWr",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 122, y: 151 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/f4039033-50c5-44db-b708-4870777a6fff.png"
      },
      "1b47fe5b-20a2-4e19-af55-5a7d93a06c44": {
        name: "comingsoon",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/1b47fe5b-20a2-4e19-af55-5a7d93a06c44.png",
        frameSize: { x: 906, y: 109 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "uwr_znTA53PDutbKeDb5YS466bfbLtl5",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 906, y: 109 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/1b47fe5b-20a2-4e19-af55-5a7d93a06c44.png"
      },
      "26672980-531b-457a-ab4f-f201c095eb85": {
        name: "newbesttext",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/26672980-531b-457a-ab4f-f201c095eb85.png",
        frameSize: { x: 1147, y: 185 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "luLxMECQHFi0APb0BDiipPreHCdxGEsq",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1147, y: 185 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/26672980-531b-457a-ab4f-f201c095eb85.png"
      },
      "ce9f41cd-4200-4135-bb6c-fbf0449cb509": {
        name: "levelplaybutton",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/ce9f41cd-4200-4135-bb6c-fbf0449cb509.png",
        frameSize: { x: 308, y: 310 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "2BjheYcUTaH1AJJvNDRV05fKuKSAgmZW",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 308, y: 310 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/ce9f41cd-4200-4135-bb6c-fbf0449cb509.png"
      },
      "df9eddea-87c8-4b37-a03a-70db81d34719": {
        name: "lock",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/df9eddea-87c8-4b37-a03a-70db81d34719.png",
        frameSize: { x: 240, y: 285 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "lLY6xyJhqevBEHhpetpio7D2QlT5KVvN",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 240, y: 285 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/df9eddea-87c8-4b37-a03a-70db81d34719.png"
      },
      "2d5890e8-00bb-4c43-b2a8-21d9cb659934": {
        name: "iconmenubg",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/2d5890e8-00bb-4c43-b2a8-21d9cb659934.png",
        frameSize: { x: 100, y: 100 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "Peul.jiBzrxvDjogIF5uZGPsQvi9wAvs",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 100, y: 100 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/2d5890e8-00bb-4c43-b2a8-21d9cb659934.png"
      },
      "2740bca7-a69f-4b7c-b81c-45acf44079f8": {
        name: "cube2",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/2740bca7-a69f-4b7c-b81c-45acf44079f8.png",
        frameSize: { x: 185, y: 185 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "tONQZr5Z7gOONkCb6X029RtmpywtZEoY",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 185, y: 185 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/2740bca7-a69f-4b7c-b81c-45acf44079f8.png"
      },
      "c706ea21-bcc8-476f-a3a0-8e602923be42": {
        name: "cube3",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/c706ea21-bcc8-476f-a3a0-8e602923be42.png",
        frameSize: { x: 185, y: 185 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "VG8tBUewN8dZd81a.MSWjd9G2ZqoBrqf",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 185, y: 185 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/c706ea21-bcc8-476f-a3a0-8e602923be42.png"
      },
      "5333550a-b537-469c-84ad-2e076f85bc46": {
        name: "cube4",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/5333550a-b537-469c-84ad-2e076f85bc46.png",
        frameSize: { x: 185, y: 185 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "M4hiHSeamfVLbGpwatNnkhL4FbCH.fPH",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 185, y: 185 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/5333550a-b537-469c-84ad-2e076f85bc46.png"
      },
      "fea6cda7-9769-4a32-a75a-077feb8ed39e": {
        name: "currentcubetext",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/fea6cda7-9769-4a32-a75a-077feb8ed39e.png",
        frameSize: { x: 979, y: 106 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "1cIOql_ZE8hqHAGHzT1elG1CeI9SWnXS",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 979, y: 106 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/fea6cda7-9769-4a32-a75a-077feb8ed39e.png"
      },
      "1ce78065-e196-4140-b9e2-fda5ba1288f1": {
        name: "popupbg",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/1ce78065-e196-4140-b9e2-fda5ba1288f1.png",
        frameSize: { x: 365, y: 120 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "deLtQT3KavW9f8rac4.IB7S9jVWHnuHH",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 365, y: 120 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/1ce78065-e196-4140-b9e2-fda5ba1288f1.png"
      },
      "5f20c935-569f-49b1-a4af-d52f150d3f54": {
        name: "confirmbutton",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/5f20c935-569f-49b1-a4af-d52f150d3f54.png",
        frameSize: { x: 217, y: 218 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "e2uVFwbkCFRVJoO5NbNUmP6erk33bbvl",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 217, y: 218 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/5f20c935-569f-49b1-a4af-d52f150d3f54.png"
      },
      "7b094a99-97a5-4454-a785-615fb79c8b10": {
        name: "lock1msg",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7b094a99-97a5-4454-a785-615fb79c8b10.png",
        frameSize: { x: 1513, y: 239 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "PtRCuMfA.tFI0QeW5yNIvs.yRQwvTPY8",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1513, y: 239 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7b094a99-97a5-4454-a785-615fb79c8b10.png"
      },
      "01187757-8f60-4a8b-ba47-4de4178d5dbf": {
        name: "lock2msg",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/01187757-8f60-4a8b-ba47-4de4178d5dbf.png",
        frameSize: { x: 1464, y: 238 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "oRTqKBtJWZylzD1yL.INbrhHB61LSAfX",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1464, y: 238 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/01187757-8f60-4a8b-ba47-4de4178d5dbf.png"
      },
      "696f239e-8f60-4bd0-978c-8dc40c1c5b1f": {
        name: "lock3msg",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/696f239e-8f60-4bd0-978c-8dc40c1c5b1f.png",
        frameSize: { x: 918, y: 240 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "n.E91QT2o1RPwRIoQvHRppLPx08M.LcW",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 918, y: 240 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/696f239e-8f60-4bd0-978c-8dc40c1c5b1f.png"
      },
      "3dfba314-4421-4377-bcf1-c2c9a5774959": {
        name: "coin",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/3dfba314-4421-4377-bcf1-c2c9a5774959.png",
        frameSize: { x: 174, y: 174 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "ht2KYhfUxR7S_MHmyGelZ7gL16XHnLAy",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 174, y: 174 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/3dfba314-4421-4377-bcf1-c2c9a5774959.png"
      },
      "7164313e-86c2-4282-93c0-340490b40274": {
        name: "iconunlockedtext",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7164313e-86c2-4282-93c0-340490b40274.png",
        frameSize: { x: 1023, y: 107 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "MwuxPeu6Lxe.Y.X3.mNWtYiCnBBQ56tu",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1023, y: 107 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/7164313e-86c2-4282-93c0-340490b40274.png"
      },
      "f8af504e-07e4-4ec4-a237-8adcdf9a4739": {
        name: "tip1",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/f8af504e-07e4-4ec4-a237-8adcdf9a4739.png",
        frameSize: { x: 665, y: 106 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "LACNDA1wzkKf3.nLCb75z9IT1JJgno9Q",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 665, y: 106 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/f8af504e-07e4-4ec4-a237-8adcdf9a4739.png"
      },
      "b5f8cb21-c1e9-4d99-bc2f-6179cf656563": {
        name: "startingtextp1",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/b5f8cb21-c1e9-4d99-bc2f-6179cf656563.png",
        frameSize: { x: 1715, y: 502 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "4lq3J45xXvpUF7Tgv6LHiZxjT8KxS_K7",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1715, y: 502 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/b5f8cb21-c1e9-4d99-bc2f-6179cf656563.png"
      },
      "8915e286-3b3f-4241-b585-4e8709769eb6": {
        name: "startingtextp2",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/8915e286-3b3f-4241-b585-4e8709769eb6.png",
        frameSize: { x: 1542, y: 409 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "Vk9_CXe4ovlKvoMv2ePK99WCShJs4115",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 1542, y: 409 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/8915e286-3b3f-4241-b585-4e8709769eb6.png"
      },
      "fc9fe3bc-18e5-40b9-812a-92b7f408bd4b": {
        name: "startingtextp3",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/fc9fe3bc-18e5-40b9-812a-92b7f408bd4b.png",
        frameSize: { x: 865, y: 238 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "W3q3fxeVm6s5fDUiEl0W3kZ8Mz1Kepq0",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 865, y: 238 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/fc9fe3bc-18e5-40b9-812a-92b7f408bd4b.png"
      },
      "a58d242a-2108-40e6-a523-17ce7bf991d3": {
        name: "tip2",
        sourceUrl:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a58d242a-2108-40e6-a523-17ce7bf991d3.png",
        frameSize: { x: 568, y: 234 },
        frameCount: 1,
        looping: true,
        frameDelay: 4,
        version: "cHolAxlADEqyxvVPZv7XFcHnFShliEBI",
        loadedFromSource: true,
        saved: true,
        sourceSize: { x: 568, y: 234 },
        rootRelativePath:
          "assets/v3/animations/GG63RP13RU2BSKHAAs36ASCrIIbASSK6KAbTWEqva3I/a58d242a-2108-40e6-a523-17ce7bf991d3.png"
      }
    }
  };
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
        image,
        props.frameSize.x,
        props.frameSize.y,
        frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(
        spriteSheet
      );
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay =
        props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === "preload") {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
    // -----

    World.frameRate = 60;

    // MAKE FARTHER AWAY, + CHANGE IT FOR OTHER ARRAYS
    var objects = [
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        0,
        0,
        0,
        0,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        2,
        2,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ],
      [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        1,
        2,
        1,
        1,
        2,
        1,
        1,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        2,
        2,
        2,
        2,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        1,
        2,
        2,
        2,
        2,
        2,
        2,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        2,
        2,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ]
    ];
    //GAME SETUP
    // Create the sprites

    var bg = createSprite(200, 200);
    bg.setAnimation("bg");
    bg.scale = 0.8;
    bg.velocityX = -1;

    var bgFlipped = createSprite(590, 200);
    bgFlipped.setAnimation("bgFlipped");
    bgFlipped.scale = 0.8;
    bgFlipped.velocityX = -1;

    var bgUpsideDown = createSprite(200, -200);
    bgUpsideDown.setAnimation("bgUpsideDown");
    bgUpsideDown.scale = 0.8;
    bgUpsideDown.velocityX = -1;

    var bgFlippedUpsideDown = createSprite(590, -200);
    bgFlippedUpsideDown.setAnimation("bgFlippedUpsideDown");
    bgFlippedUpsideDown.scale = 0.8;
    bgFlippedUpsideDown.velocityX = -1;

    var blocks = createGroup();
    var spikes = createGroup();

    var bestPctText = createSprite(181, 344);
    bestPctText.visible = false;

    var respawningtext = createSprite(200, 200);
    respawningtext.setAnimation("respawningtext");
    respawningtext.visible = false;
    respawningtext.scale = 0.5;

    var newbesttext = createSprite(200, 100);
    newbesttext.setAnimation("newbesttext");
    newbesttext.visible = false;
    newbesttext.scale = 0.3;

    var levelcompbox = createSprite(200, 200);
    levelcompbox.setAnimation("levelcompbox");
    levelcompbox.visible = false;
    levelcompbox.scale = 3.2;

    var levelcompsidebarleft = createSprite(32, 200);
    levelcompsidebarleft.setAnimation("levelcompsidebarleft");
    levelcompsidebarleft.visible = false;
    levelcompsidebarleft.scale = 0.2;

    var levelcompsidebarright = createSprite(368, 200);
    levelcompsidebarright.setAnimation("levelcompsidebarright");
    levelcompsidebarright.visible = false;
    levelcompsidebarright.scale = 0.2;

    var levelcomptopbar = createSprite(200, 55);
    levelcomptopbar.setAnimation("levelcomptopbar");
    levelcomptopbar.visible = false;
    levelcomptopbar.scale = 0.23;

    var levelcompbottombar = createSprite(200, 353);
    levelcompbottombar.setAnimation("levelcompbottombar");
    levelcompbottombar.visible = false;
    levelcompbottombar.scale = 0.24;

    var restartbutton = createSprite(105, 350);
    restartbutton.setAnimation("restartbutton");
    restartbutton.visible = false;
    restartbutton.scale = 0.35;

    var menubutton = createSprite(295, 350);
    menubutton.setAnimation("menubutton");
    menubutton.visible = false;
    menubutton.scale = 0.35;

    var levelplaybutton = createSprite(105, 350);
    levelplaybutton.setAnimation("levelplaybutton");
    levelplaybutton.visible = false;
    levelplaybutton.scale = 0.29;

    var levelcomp = createSprite(200, 200);
    levelcomp.setAnimation("levelcomp");
    levelcomp.visible = false;
    levelcomp.scale = 0.28;

    var browsinglevelbg = createSprite(200, 200);
    browsinglevelbg.setAnimation("browsinglevelbg");
    browsinglevelbg.visible = false;
    browsinglevelbg.scale = 4;

    var browsinglevelcorner = createSprite(50, 350);
    browsinglevelcorner.setAnimation("browsinglevelcorner");
    browsinglevelcorner.visible = false;
    browsinglevelcorner.scale = 0.4;

    var coin = createSprite(380, 380);
    coin.setAnimation("coin");
    coin.visible = false;
    coin.scale = 0.35;
    coin.setCollider("circle");

    var browsinglevelcornerflipped = createSprite(350, 350);
    browsinglevelcornerflipped.setAnimation("browsinglevelcornerflipped");
    browsinglevelcornerflipped.visible = false;
    browsinglevelcornerflipped.scale = 0.4;

    var browsingleveltopbar = createSprite(200, 16);
    browsingleveltopbar.setAnimation("browsingleveltopbar");
    browsingleveltopbar.visible = false;
    browsingleveltopbar.scale = 0.27;

    var browsinglevelnextarrowleft = createSprite(20, 200);
    browsinglevelnextarrowleft.setAnimation("browsinglevelnextarrowleft");
    browsinglevelnextarrowleft.visible = false;
    browsinglevelnextarrowleft.scale = 0.35;

    var browsinglevelnextarrowright = createSprite(380, 200);
    browsinglevelnextarrowright.setAnimation("browsinglevelnextarrowright");
    browsinglevelnextarrowright.visible = false;
    browsinglevelnextarrowright.scale = 0.35;

    var browsinglevelbox = createSprite(200, 190);
    browsinglevelbox.setAnimation("browsinglevelbox");
    browsinglevelbox.visible = false;
    browsinglevelbox.scale = 2.5;

    var progresstext = createSprite(200, 310);
    progresstext.setAnimation("progresstext");
    progresstext.visible = false;
    progresstext.scale = 0.2;

    var stereohalfness = createSprite(200, 140);
    stereohalfness.setAnimation("stereohalfness");
    stereohalfness.visible = false;
    stereohalfness.scale = 0.25;

    var easyface = createSprite(200, 220);
    easyface.setAnimation("easyface");
    easyface.visible = false;
    easyface.scale = 0.7;

    var comingsoon = createSprite(200, 105);
    comingsoon.setAnimation("comingsoon");
    comingsoon.visible = false;
    comingsoon.scale = 0.42;

    var iconmenubg = createSprite(200, 200);
    iconmenubg.setAnimation("iconmenubg");
    iconmenubg.visible = false;
    iconmenubg.scale = 4;

    var browsinglevelbackarrow = createSprite(19, 25);
    browsinglevelbackarrow.setAnimation("browsinglevelbackarrow");
    browsinglevelbackarrow.visible = false;
    browsinglevelbackarrow.scale = 0.28;

    var cube = createSprite(125, 375);
    cube.setAnimation("cube");
    cube.scale = 0.11;
    cube.visible = false;

    var displaycube1 = createSprite(120, 200);
    displaycube1.setAnimation("cube");
    displaycube1.visible = false;
    displaycube1.scale = 0.26;

    var displaycube2 = createSprite(280, 200);
    displaycube2.setAnimation("cube2");
    displaycube2.visible = false;
    displaycube2.scale = 0.63;

    var displaycube3 = createSprite(120, 335);
    displaycube3.setAnimation("cube3");
    displaycube3.visible = false;
    displaycube3.scale = 0.63;

    var displaycube4 = createSprite(280, 335);
    displaycube4.setAnimation("cube4");
    displaycube4.visible = false;
    displaycube4.scale = 0.63;

    var currentcubetext = createSprite(200, 15);
    currentcubetext.setAnimation("currentcubetext");
    currentcubetext.visible = false;
    currentcubetext.scale = 0.2;

    var popupbg = createSprite(200, 50);
    popupbg.setAnimation("popupbg");
    popupbg.visible = false;
    popupbg.scale = 0.8;

    var confirmbutton = createSprite(200, 100);
    confirmbutton.setAnimation("confirmbutton");
    confirmbutton.visible = false;
    confirmbutton.scale = 0.25;

    var lock1msg = createSprite(201, 45);
    lock1msg.setAnimation("lock1msg");
    lock1msg.visible = false;
    lock1msg.scale = 0.18;

    var lock2msg = createSprite(200, 45);
    lock2msg.setAnimation("lock2msg");
    lock2msg.visible = false;
    lock2msg.scale = 0.18;

    var lock3msg = createSprite(200, 45);
    lock3msg.setAnimation("lock3msg");
    lock3msg.visible = false;
    lock3msg.scale = 0.18;

    var locks = createGroup();
    createLocks();

    var mainmenuicons = createSprite(111, 200);
    mainmenuicons.setAnimation("mainmenuicons");
    mainmenuicons.visible = false;
    mainmenuicons.scale = 0.5;

    var mainmenuplay = createSprite(289, 200);
    mainmenuplay.setAnimation("mainmenuplay");
    mainmenuplay.visible = false;
    mainmenuplay.scale = 0.33;

    var geodashlogo = createSprite(200, 70);
    geodashlogo.setAnimation("geodashlogo");
    geodashlogo.visible = false;
    geodashlogo.scale = 0.45;

    var iconunlockedtext = createSprite(200, 200);
    iconunlockedtext.setAnimation("iconunlockedtext");
    iconunlockedtext.visible = false;
    iconunlockedtext.scale = 0.26;

    var tip1 = createSprite(200, 260);
    tip1.setAnimation("tip1");
    tip1.visible = false;
    tip1.scale = 0.3;

    var tip2 = createSprite(200, 280);
    tip2.setAnimation("tip2");
    tip2.visible = false;
    tip2.scale = 0.3;

    var startingtextp1 = createSprite(200, 85);
    startingtextp1.setAnimation("startingtextp1");
    startingtextp1.visible = false;
    startingtextp1.scale = 0.23;

    var startingtextp2 = createSprite(200, 225);
    startingtextp2.setAnimation("startingtextp2");
    startingtextp2.visible = false;
    startingtextp2.scale = 0.25;

    var startingtextp3 = createSprite(200, 339);
    startingtextp3.setAnimation("startingtextp3");
    startingtextp3.visible = false;
    startingtextp3.scale = 0.28;

    camera.on();
    //print(cube.y);
    //print(camera.y);

    //create the variables
    var currentY = 375;
    var jumping = false;
    var currentX = 0;
    var initialCam = camera.y;
    var blockY = 425;
    var upsideDown = false;
    var initialTime = null;
    var initialTime2 = null;
    var initialTime3 = null;
    var jumpGap = randomNumber(1, 3);
    var overallX = 0;
    var levelLength = objects[0].length * 50;
    var previousCam = 200;
    var previousVeloY = 0;

    var inGame = false;
    var completeScreen = false;
    var dead = true;
    var endLevel = false;
    var mainScreen = false;
    var browsingScreen = false;
    var browsingScreen2 = false;
    var pauseMenu = false;
    var iconMenu = false;
    var startingScreen = true;

    var bestPct = 0;
    var menuKills = 0;

    function draw() {
      if (startingScreen) {
        drawStartingScreen();
        startingScreenInteractions();
        scrollingBackground();
        drawSprites();
      }
      if (pauseMenu) {
        if (initialTime3 == null) {
          drawPauseMenu();
        }
        pauseMenuInteractions();
        drawSprites();
      }

      if (iconMenu) {
        drawIconMenu();
        iconMenuInteractions();
        scrollingBackground();
        drawSprites();
        fill("white");
        noStroke();
        rect(100, 125, 200, 5);
      }
      if (mainScreen) {
        drawMainScreen();
        mainMenuInteractions();
        drawSprites();
      }
      if (browsingScreen) {
        //print(blocks.length);
        //print(spikes.length);
        bestPctText.x = 181;
        drawBrowsingScreen();
        browsingScreenInteractions();
        drawSprites();
        textSize(20);
        fill("white");
        text(bestPct + "%", bestPctText.x, bestPctText.y);
      }
      if (browsingScreen2) {
        drawBrowsingScreen2();
        browsingScreen2Interactions();
        drawSprites();
      }
      if (completeScreen) {
        if (popupbg.velocityX != 0 && popupbg.x > 550) {
          popupbg.velocityX = 0;
          iconunlockedtext.velocityX = 0;
          popupbg.visible = false;
          iconunlockedtext.visible = false;
        }
        if (bestPct < 100) {
          popupbg.visible = true;
          iconunlockedtext.visible = true;
          popupbg.x = -155;
          popupbg.y = 83;
          iconunlockedtext.x = -155;
          iconunlockedtext.y = popupbg.y - 3;

          popupbg.velocityX = 4;
          iconunlockedtext.velocityX = 4;
          bestPct = 100;
        }
        drawCompleteScreen();
        completeScreenInteractions();
        camera.y = 200;
        drawSprites();
        displayPercentage();
      }
      if (inGame) {
        if (endLevel) {
          overallX += 5;
          endingLevel();

          drawSprites();
          displayPercentage();
        }

        if (initialTime != null && dead) {
          if (World.seconds - initialTime >= 2) {
            resetLevel();
            drawSprites();
            cube.visible = true;
          }
        } else if (!dead && !endLevel && !completeScreen) {
          deleteObjects();
          moveCamera();
          rotateCube();

          overallX += 5;
          currentX += 5;
          if (currentX >= 50) {
            drawNewObjects();
            currentX = 0;
          }

          checkCollisions();
          jump();

          scrollingBackground();

          if (dead) {
            if (bestPct < Math.round((overallX / levelLength) * 100)) {
              bestPct = Math.round((overallX / levelLength) * 100);
              newbesttext.visible = true;
            }
            checkTips();

            initialTime = World.seconds;
            respawningtext.visible = true;
          }
          checkEnd();

          if (keyWentDown("e")) {
            pauseMenu = true;
            inGame = false;
          }

          drawSprites();
          displayPercentage();
        }
      }
    }

    function checkTips() {
      //print(overallX);
      if (overallX > 425 && overallX < 800) {
        tip2.visible = true;
        tip2.x = 200;
      }
      if (overallX > 1100 && overallX < 1400) {
        tip1.visible = true;
        tip1.x = 190;
        if (overallX >= 1250) {
          tip1.x = 290;
        }
      }
    }

    function drawStartingScreen() {
      startingtextp1.visible = true;
      startingtextp2.visible = true;
      startingtextp3.visible = true;
      popupbg.visible = true;
      popupbg.y = 340;
    }
    function startingScreenInteractions() {
      if (mouseWentDown("leftButton") && mouseIsOver(startingtextp3)) {
        mainScreen = true;
        startingScreen = false;
        startingtextp1.visible = false;
        startingtextp2.visible = false;
        startingtextp3.visible = false;
        popupbg.visible = false;
        cube.visible = true;
      }
    }

    function createLocks() {
      //locks.add(createSprite(120, 200));
      locks.add(createSprite(280, 200));
      locks.add(createSprite(120, 335));
      locks.add(createSprite(280, 335));

      locks.setAnimationEach("lock");
      locks.setScaleEach(0.4);
      locks.setVisibleEach(false);
    }

    function drawIconMenu() {
      iconmenubg.visible = true;
      locks.setVisibleEach(true);
      displaycube1.visible = true;
      //popupbg.visible = true;
      iconunlockedtext.visible = false;
      popupbg.x = 200;
      popupbg.y = 50;
      if (bestPct == 100) {
        displaycube2.visible = true;
        locks.get(0).x = 500;
      }
      if (menuKills >= 15) {
        displaycube3.visible = true;
        locks.get(1).x = 500;
      }
      if (coin.y <= -100) {
        displaycube4.visible = true;
        locks.get(2).x = 500;
      }
      currentcubetext.visible = true;
      browsinglevelbackarrow.visible = true;

      cube.visible = true;

      cube.x = 200;
      cube.y = 76;
      cube.rotation = 0;
      cube.rotationSpeed = 0;
      fill("white");
    }

    function iconMenuInteractions() {
      if (mouseIsOver(locks.get(0)) && mouseWentDown("leftButton")) {
        //topright
        //print("lock0");
        popupbg.visible = true;
        lock2msg.visible = false;
        lock3msg.visible = false;
        lock1msg.visible = true;
        confirmbutton.visible = true;
        popupbg.visible = true;
      } else if (mouseIsOver(locks.get(1)) && mouseWentDown("leftButton")) {
        //botLeft
        //print("lock1");
        popupbg.visible = true;
        lock1msg.visible = false;
        lock3msg.visible = false;
        lock2msg.visible = true;
        confirmbutton.visible = true;
        popupbg.visible = true;
      } else if (mouseIsOver(locks.get(2)) && mouseWentDown("leftButton")) {
        //botRight
        //print("lock2");
        popupbg.visible = true;
        lock1msg.visible = false;
        lock2msg.visible = false;
        lock3msg.visible = true;
        confirmbutton.visible = true;
        popupbg.visible = true;
      }

      if (
        mouseIsOver(confirmbutton) &&
        mouseWentDown("leftButton") &&
        confirmbutton.visible
      ) {
        popupbg.visible = false;
        lock1msg.visible = false;
        lock2msg.visible = false;
        lock3msg.visible = false;
        confirmbutton.visible = false;
        popupbg.visible = false;
      }

      if (mouseIsOver(browsinglevelbackarrow) && mouseWentDown("leftButton")) {
        iconmenubg.visible = false;
        locks.setVisibleEach(false);
        displaycube1.visible = false;
        displaycube2.visible = false;
        displaycube3.visible = false;
        displaycube4.visible = false;
        currentcubetext.visible = false;
        browsinglevelbackarrow.visible = false;
        popupbg.visible = false;
        lock1msg.visible = false;
        lock2msg.visible = false;
        lock3msg.visible = false;
        confirmbutton.visible = false;

        cube.scale = cube.scale / 1.87;

        inGame = false;
        completeScreen = false;
        dead = true;
        endLevel = false;
        pauseMenu = false;
        mainScreen = true;
        iconMenu = false;
        browsingScreen = false;
        cube.velocityX = 0;
      }

      if (mouseIsOver(displaycube1) && mouseWentDown("leftButton")) {
        cube.setAnimation("cube");
        if (cube.scale != 0.2) {
          cube.scale = 0.2;
        }
      }
      if (
        mouseIsOver(displaycube2) &&
        mouseWentDown("leftButton") &&
        displaycube2.visible
      ) {
        cube.setAnimation("cube2");
        if (cube.scale != 0.54) {
          cube.scale = 0.54;
        }
      }
      if (
        mouseIsOver(displaycube3) &&
        mouseWentDown("leftButton") &&
        displaycube3.visible
      ) {
        cube.setAnimation("cube3");
        if (cube.scale != 0.54) {
          cube.scale = 0.54;
        }
      }
      if (
        mouseIsOver(displaycube4) &&
        mouseWentDown("leftButton") &&
        displaycube4.visible
      ) {
        cube.setAnimation("cube4");
        if (cube.scale != 0.54) {
          cube.scale = 0.54;
        }
      }
    }

    function pauseMenuInteractions() {
      if (initialTime3 != null) {
        if (World.seconds - initialTime3 >= 2) {
          levelcomptopbar.visible = false;
          levelcompbottombar.visible = false;
          levelcompsidebarleft.visible = false;
          levelcompsidebarright.visible = false;
          levelplaybutton.visible = false;
          menubutton.visible = false;
          levelcompbox.visible = false;

          camera.y = previousCam;
          bg.velocityX = -1;
          bgFlipped.velocityX = -1;
          bgUpsideDown.velocityX = -1;
          bgFlippedUpsideDown.velocityX = -1;
          blocks.setVelocityXEach(-5);
          spikes.setVelocityXEach(-5);
          cube.velocityY = previousVeloY;
          if (cube.y < blockY - 115 && jumping) {
            cube.rotation += 10;
          }

          inGame = true;
          completeScreen = false;
          dead = false;
          endLevel = false;
          pauseMenu = false;
          mainScreen = false;
          iconMenu = false;
          browsingScreen = false;
          respawningtext.visible = false;
          initialTime3 = null;
        }
      }
      if (mouseIsOver(menubutton) && mouseWentDown("leftButton")) {
        levelcomptopbar.visible = false;
        levelcompbottombar.visible = false;
        levelcompsidebarleft.visible = false;
        levelcompsidebarright.visible = false;
        levelplaybutton.visible = false;
        menubutton.visible = false;
        levelcompbox.visible = false;
        cube.visible = false;

        blocks.destroyEach();
        spikes.destroyEach();

        inGame = false;
        completeScreen = false;
        dead = true;
        endLevel = false;
        pauseMenu = false;
        mainScreen = false;
        iconMenu = false;
        browsingScreen = true;
      }

      if (mouseIsOver(levelplaybutton) && mouseWentUp("leftButton")) {
        levelcomptopbar.visible = false;
        levelcompbottombar.visible = false;
        levelcompsidebarleft.visible = false;
        levelcompsidebarright.visible = false;
        levelplaybutton.visible = false;
        menubutton.visible = false;
        levelcompbox.visible = false;

        initialTime3 = World.seconds;
        respawningtext.visible = true;
      }
    }

    function drawPauseMenu() {
      previousCam = camera.y;
      previousVeloY = cube.velocityY;

      camera.y = 200;
      bg.velocityX = 0;
      bgFlipped.velocityX = 0;
      bgUpsideDown.velocityX = 0;
      bgFlippedUpsideDown.velocityX = 0;
      blocks.setVelocityXEach(0);
      spikes.setVelocityXEach(0);
      cube.velocityY = 0;

      levelcomptopbar.visible = true;
      levelcompbottombar.visible = true;
      levelcompsidebarleft.visible = true;
      levelcompsidebarright.visible = true;
      levelplaybutton.visible = true;
      menubutton.visible = true;
      levelcompbox.visible = true;
    }

    function resetLevel() {
      dead = false;
      initialTime = null;
      overallX = 0;
      camera.y = initialCam;
      resetPlayer();
      resetObjects();
      objects = [
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          0,
          0,
          0,
          0,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          2,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          1,
          2,
          1,
          1,
          2,
          1,
          1,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          0,
          0,
          0,
          0,
          2,
          2,
          2,
          2,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          2,
          1,
          1,
          2,
          2,
          2,
          2,
          2,
          2,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          1,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          2,
          2,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      ];

      drawInitialObjects();
      respawningtext.visible = false;
      newbesttext.visible = false;
      tip1.visible = false;
      tip2.visible = false;
    }

    function mainMenuInteractions() {
      if (mouseIsOver(cube) && mouseWentDown("leftButton")) {
        cube.x = 425;
        menuKills += 1;
      }
      if (popupbg.velocityX != 0 && popupbg.x > 550) {
        popupbg.velocityX = 0;
        iconunlockedtext.velocityX = 0;
        popupbg.visible = false;
        iconunlockedtext.visible = false;
      }
      if (menuKills == 14) {
        popupbg.visible = true;
        iconunlockedtext.visible = true;

        popupbg.x = -155;
        popupbg.y = 300;
        iconunlockedtext.x = popupbg.x;
        iconunlockedtext.y = popupbg.y - 3;

        popupbg.velocityX = 5;
        iconunlockedtext.velocityX = 5;
      }

      if (mouseIsOver(mainmenuplay) && mouseWentDown("leftButton")) {
        mainmenuplay.visible = false;
        mainmenuicons.visible = false;
        geodashlogo.visible = false;
        cube.visible = false;
        cube.velocityX = 0;

        inGame = false;
        completeScreen = false;
        dead = true;
        endLevel = false;
        mainScreen = false;
        iconMenu = false;
        browsingScreen = true;
        initialTime = World.seconds;
      }

      if (mouseIsOver(mainmenuicons) && mouseWentDown("leftButton")) {
        mainmenuplay.visible = false;
        mainmenuicons.visible = false;
        geodashlogo.visible = false;
        cube.velocityX = 0;
        cube.scale = cube.scale * 1.87;

        inGame = false;
        completeScreen = false;
        dead = true;
        endLevel = false;
        mainScreen = false;
        iconMenu = true;
        browsingScreen = false;
        initialTime = World.seconds;
      }
    }

    function browsingScreenInteractions() {
      if (
        mouseIsOver(browsinglevelbox) &&
        mouseWentDown("leftButton") &&
        World.seconds - initialTime >= 1
      ) {
        browsinglevelcorner.visible = false;
        browsinglevelcornerflipped.visible = false;
        browsingleveltopbar.visible = false;
        browsinglevelbg.visible = false;
        progresstext.visible = false;
        stereohalfness.visible = false;
        browsinglevelbox.visible = false;
        easyface.visible = false;
        browsinglevelnextarrowleft.visible = false;
        browsinglevelnextarrowright.visible = false;
        browsinglevelbackarrow.visible = false;

        inGame = true;
        completeScreen = false;
        dead = true;
        endLevel = false;
        mainScreen = false;
        iconMenu = false;
        pauseMenu = false;
        browsingScreen = false;
        initialTime = World.seconds;
        respawningtext.visible = true;
        bestPctText.x = 450;
        cube.visible = false;
      }
      if (mouseIsOver(browsinglevelbackarrow) && mouseWentDown("leftButton")) {
        browsinglevelcorner.visible = false;
        browsinglevelcornerflipped.visible = false;
        browsingleveltopbar.visible = false;
        browsinglevelbg.visible = false;
        progresstext.visible = false;
        stereohalfness.visible = false;
        browsinglevelbox.visible = false;
        easyface.visible = false;
        browsinglevelnextarrowleft.visible = false;
        browsinglevelnextarrowright.visible = false;
        browsinglevelbackarrow.visible = false;

        inGame = false;
        completeScreen = false;
        dead = true;
        endLevel = false;
        pauseMenu = false;
        mainScreen = true;
        iconMenu = false;
        browsingScreen = false;
        cube.velocityX = 0;
      }
      if (
        mouseIsOver(browsinglevelnextarrowright) &&
        mouseWentDown("leftButton")
      ) {
        browsingScreen2 = true;
        browsingScreen = false;
        progresstext.visible = false;
        stereohalfness.visible = false;
        browsinglevelbox.visible = false;
        easyface.visible = false;
        browsinglevelnextarrowright.visible = false;
      }
    }

    function browsingScreen2Interactions() {
      if (coin.velocityY != 0 && coin.y < -100) {
        coin.velocityY = 0;
      }
      if (popupbg.velocityX != 0 && popupbg.x > 550) {
        popupbg.velocityX = 0;
        iconunlockedtext.velocityX = 0;
        popupbg.visible = false;
        iconunlockedtext.visible = false;
      }
      if (mouseIsOver(coin) && mouseWentDown("leftButton")) {
        popupbg.visible = true;
        iconunlockedtext.visible = true;
        popupbg.x = -155;
        popupbg.y = 200;
        iconunlockedtext.x = popupbg.x;
        iconunlockedtext.y = popupbg.y - 3;
        popupbg.velocityX = 5;
        iconunlockedtext.velocityX = 5;
        coin.velocityY = -9;
      }

      if (
        mouseIsOver(browsinglevelnextarrowleft) &&
        mouseWentDown("leftButton")
      ) {
        browsingScreen2 = false;
        browsingScreen = true;
        browsinglevelnextarrowleft.visible = false;
        comingsoon.visible = false;
        coin.visible = false;
      }
      if (mouseIsOver(browsinglevelbackarrow) && mouseWentDown("leftButton")) {
        browsinglevelcorner.visible = false;
        browsinglevelcornerflipped.visible = false;
        browsingleveltopbar.visible = false;
        browsinglevelbg.visible = false;
        progresstext.visible = false;
        stereohalfness.visible = false;
        browsinglevelbox.visible = false;
        easyface.visible = false;
        browsinglevelnextarrowleft.visible = false;
        browsinglevelnextarrowright.visible = false;
        browsinglevelbackarrow.visible = false;
        comingsoon.visible = false;
        coin.visible = false;
        popupbg.visible = false;
        popupbg.velocityX = 0;
        iconunlockedtext.visible = false;
        iconunlockedtext.velocityX = 0;

        inGame = false;
        completeScreen = false;
        dead = true;
        endLevel = false;
        iconMenu = false;
        pauseMenu = false;
        mainScreen = true;
        browsingScreen = false;
        browsingScreen2 = false;
        cube.velocityX = 0;
      }
    }

    function drawBrowsingScreen2() {
      browsinglevelnextarrowleft.visible = true;
      comingsoon.visible = true;
      coin.visible = true;
    }

    function completeScreenInteractions() {
      if (mouseIsOver(restartbutton) && mouseWentDown("leftButton")) {
        levelcomptopbar.visible = false;
        levelcompbottombar.visible = false;
        levelcompsidebarleft.visible = false;
        levelcompsidebarright.visible = false;
        restartbutton.visible = false;
        menubutton.visible = false;
        levelcomp.visible = false;
        levelcompbox.visible = false;
        popupbg.visible = false;
        iconunlockedtext.visible = false;

        inGame = true;
        completeScreen = false;
        dead = true;
        endLevel = false;
        mainScreen = false;
        iconMenu = false;
        pauseMenu = false;
        browsingScreen = false;
        initialTime = World.seconds;
        respawningtext.visible = true;
      }

      if (mouseIsOver(menubutton) && mouseWentDown("leftButton")) {
        levelcomptopbar.visible = false;
        levelcompbottombar.visible = false;
        levelcompsidebarleft.visible = false;
        levelcompsidebarright.visible = false;
        restartbutton.visible = false;
        menubutton.visible = false;
        levelcomp.visible = false;
        levelcompbox.visible = false;
        popupbg.visible = false;
        iconunlockedtext.visible = false;

        inGame = false;
        completeScreen = false;
        dead = true;
        endLevel = false;
        pauseMenu = false;
        iconMenu = false;
        mainScreen = false;
        browsingScreen = true;
      }
    }

    function endingLevel() {
      bg.velocityX = 0;
      bgFlipped.velocityX = 0;
      bgUpsideDown.velocityX = 0;
      bgFlippedUpsideDown.velocityX = 0;
      if (cube.x < 225) {
        cube.velocityX = 5;
      }
      if (!jumping && cube.y < 375 && cube.x >= 225) {
        cube.velocityY += 0.18;
        cube.velocityX -= 0.1;
      } else if (cube.x >= 225) {
        cube.velocityY = -12;
        cube.velocityX = 7.5;
      }
      if (cube.x > 380) {
        completeScreen = true;
        endLevel = false;
        inGame = false;
        dead = true;

        cube.velocityX = 0;
        cube.velocityY = 0;
        cube.visible = false;
      }
    }

    function drawCompleteScreen() {
      levelcomptopbar.visible = true;
      levelcompbottombar.visible = true;
      levelcompsidebarleft.visible = true;
      levelcompsidebarright.visible = true;
      restartbutton.visible = true;
      menubutton.visible = true;
      levelcomp.visible = true;
      levelcompbox.visible = true;
    }

    function drawMainScreen() {
      if (cube.velocityX == 0) {
        resetObjects();
        bg.velocityX = -1;
        bgFlipped.velocityX = -1;
        scrollingBackground();
        //print("resetting player");
        cube.velocityX = 0;
        cube.velocityY = 0;
        cube.y = 375;
        cube.x = -25;
        cube.rotationSpeed = 0;
        cube.rotation = 0;
        upsideDown = false;
        cube.visible = true;

        mainmenuicons.visible = true;
        mainmenuplay.visible = true;
        geodashlogo.visible = true;
        cube.velocityX = randomNumber(1, 5);
        jumpGap = randomNumber(1, 3);
      }
      if (initialTime2 == null) {
        initialTime2 = World.seconds;
      }
      if (cube.y < 310 && jumping) {
        cube.rotation += 10;
      }
      if (jumping) {
        cube.velocityY += 0.5;
      }

      if (World.seconds - initialTime2 >= jumpGap && !jumping) {
        cube.velocityY = -9;
        jumping = true;
        initialTime2 = null;
      }

      if (cube.y > 375) {
        cube.y = 375;
        jumping = false;
        cube.velocityY = 0;
      }
      if (cube.x > 425) {
        cube.x = -50;
        cube.y = 375;
        cube.velocityX = randomNumber(1, 5);
        cube.velocityY = 0;
        cube.rotation = 0;
        jumpGap = randomNumber(1, 3);
      }
      scrollingBackground();
    }

    function drawBrowsingScreen() {
      browsinglevelbg.visible = true;
      browsingleveltopbar.visible = true;
      browsinglevelcorner.visible = true;
      browsinglevelcornerflipped.visible = true;
      browsinglevelbox.visible = true;
      progresstext.visible = true;
      stereohalfness.visible = true;
      easyface.visible = true;
      browsinglevelnextarrowright.visible = true;
      browsinglevelbackarrow.visible = true;
    }

    function checkEnd() {
      if (objects[0].length == 4) {
        endLevel = true;
        //print(endLevel);
      }
    }

    function resetPlayer() {
      //print("resetting player");
      cube.velocityX = 0;
      cube.velocityY = 0;
      cube.y = 375;
      cube.x = 125;
      cube.rotationSpeed = 0;
      cube.rotation = 0;
      upsideDown = false;
    }

    function resetObjects() {
      // for (var blockcount3 = 0; blockcount3 < blocks.length; blockcount3 += 0) {
      //   blocks.remove(blocks.get(blockcount3));
      // }
      // for (var spikecount2 = 0; spikecount2 < spikes.length; spikecount2 += 0) {
      //   spikes.remove(spikes.get(spikecount2));
      // }
      blocks.destroyEach();
      spikes.destroyEach();
      //print(blocks.length);
      //print(spikes.length);
      bg.x = 200;
      bgFlipped.x = 590;
      bgUpsideDown.x = 200;
      bgFlippedUpsideDown.x = 590;
      bg.velocityX = -1;
      bgFlipped.velocityX = -1;
      bgUpsideDown.velocityX = -1;
      bgFlippedUpsideDown.velocityX = -1;
    }

    function rotateCube() {
      if (cube.y < blockY - 115 && jumping) {
        cube.rotation += 10;
      }
    }

    function moveCamera() {
      if (cube.y < currentY - initialCam) {
        if (camera.y > blockY - 100) {
          camera.y -= 2.5;
          //print("cam moving up");
        }
      }

      if (cube.y > currentY - initialCam && cube.y > blockY) {
        if (camera.y < initialCam) {
          if (cube.velocityY != 0) {
            camera.y += cube.velocityY;
          } else {
            camera.y += 3;
          }
          //print("cam moving down");
        }
        if (camera.y > initialCam) {
          camera.y = initialCam;
        }
      }
    }

    function drawNewObjects() {
      for (var i = 0; i < 8; i++) {
        objects[i].splice(0, 1);
        if (objects[i][8] == 2) {
          blocks.add(createSprite(8 * 50 + 25, i * 50 + 25));
        }
        if (objects[i][8] == 1) {
          spikes.add(createSprite(8 * 50 + 25, i * 50 + 25));
        }
      }
      blocks.setAnimationEach("block");
      blocks.setScaleEach(0.5);
      blocks.setVelocityXEach(-5);

      spikes.setAnimationEach("spike");
      spikes.setScaleEach(0.41);
      spikes.setVelocityXEach(-5);
      spikes.setColliderEach("rectangle", 0, 20, 40, 70, 0);
    }

    function deleteObjects() {
      for (var blockcount3 = 0; blockcount3 < blocks.length; blockcount3++) {
        var temp_block3 = blocks.get(blockcount3);
        if (temp_block3.x + 25 <= 0) {
          blocks.remove(temp_block3);
          //print("block deleted!");
        }
      }
      for (var spikecount2 = 0; spikecount2 < spikes.length; spikecount2++) {
        var temp_spike2 = spikes.get(spikecount2);
        if (temp_spike2.x + 25 <= 0) {
          spikes.remove(temp_spike2);
          //print("spike deleted!");
        }
      }
    }

    function drawInitialObjects() {
      for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 9; j++) {
          //object = objects[i][j];
          if (objects[i][j] == 2) {
            blocks.add(createSprite(j * 50 + 25, i * 50 + 25));
          }
          if (objects[i][j] == 1) {
            spikes.add(createSprite(j * 50 + 25, i * 50 + 25));
          }
        }
      }
      blocks.setAnimationEach("block");
      blocks.setScaleEach(0.5);
      blocks.setVelocityXEach(-5);

      spikes.setAnimationEach("spike");
      spikes.setScaleEach(0.41);
      spikes.setVelocityXEach(-5);
      spikes.setColliderEach("rectangle", 0, 20, 40, 70, 0);
      for (var spikecount1 = 0; spikecount1 < spikes.length; spikecount1++) {
        var temp_spike = spikes.get(spikecount1);
        temp_spike.debug = true;
      }
    }

    function displayPercentage() {
      fill("white");
      textSize(20);
      textAlign(CENTER, TOP);
      text(
        Math.round((overallX / levelLength) * 100) + "%",
        200,
        camera.y - 190
      );
    }

    function scrollingBackground() {
      if (bg.x <= -200) {
        bg.x = 590;
        //print("moving bg");
      }
      if (bgFlipped.x <= -200) {
        bgFlipped.x = 590;
        //print("moving bgflipped");
      }
      if (bgUpsideDown.x <= -200) {
        bgUpsideDown.x = 590;
        //print("moving bgUpsideDown");
      }
      if (bgFlippedUpsideDown.x <= -200) {
        bgFlippedUpsideDown.x = 590;
        //print("moving bgFlippedUpsideDown");
      }
    }

    function jump() {
      if (
        (keyDown("up") || keyDown("space") || mouseDown("leftButton")) &&
        cube.y == currentY
      ) {
        //checks if up arrow pressed and if not in midair
        cube.velocityY = -9;
        jumping = true;
      }
    }
    function checkCollisions() {
      if (cube.isTouching(spikes)) {
        dead = true;
      }

      if (cube.y == 375) {
        blockY = 425;
        //jumping = false;
      }

      //COLLIDING WITH BLOCKS
      //
      //
      if (cube.y < 375 && !cube.isTouching(blocks)) {
        currentY = 375;
      }
      // if the player reaches the top of the jump
      // start moving down
      if (cube.y < currentY) {
        //if cube is in midair, slowly bring down and check if it hits block
        for (var blockcount1 = 0; blockcount1 < blocks.length; blockcount1++) {
          var temp_block = blocks.get(blockcount1);
          if (cube.isTouching(temp_block) && cube.y <= temp_block.y - 45) {
            cube.y = temp_block.y - 50;
            currentY = cube.y;
            blockY = cube.y + 50;

            jumping = false;
            upsideDown = !upsideDown;

            //print("landing on top of block");
          }
        }
        cube.velocityY += 0.5;
      }
      // if the player has reached the ground
      // stop moving down
      else {
        for (var blockcount2 = 0; blockcount2 < blocks.length; blockcount2++) {
          var temp_block2 = blocks.get(blockcount2);
          if (cube.isTouching(temp_block2) && cube.y > temp_block2.y - 35) {
            //cube hits block horizontally
            dead = true;

            temp_block2.velocityX = 0; //anyways will die

            //print("died to hori dmg");
          }
        }
        cube.velocityY = 0;
        cube.y = currentY;
      }
      if (
        jumping &&
        cube.y < currentY &&
        cube.isTouching(blocks) &&
        cube.velocityY < 0
      ) {
        dead = true;

        cube.velocityX = 0;
        //print("died to jumping on way up");
      }
    }

    function print(msg) {
      console.log(msg);
    }

    // -----
    try {
      window.draw = draw;
    } catch (e) {}
    switch (stage) {
      case "preload":
        if (preload !== window.preload) {
          preload();
        }
        break;
      case "setup":
        if (setup !== window.setup) {
          setup();
        }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode("preload");
};

window.setup = function () {
  window.wrappedExportedCode("setup");
};
