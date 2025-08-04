function initializeTree() {
HIGHLIGHT    = 1;
USETEXTLINKS = 1;
STARTALLOPEN = 0;
PATH_ICONS   = './ARPO_Images/';
PATH_LINKS   = './ARPO_Data/';

//PROJECT*******************************************************************************************
  foldersTree = GetFolder('<b>Facchini EVOLUTION</b>', 'Welcome.html');
  foldersTree.treeID = 'Frameset';
//**************************************************************************************************


//GROUP*********************************************************************************************
  group   = AddGroup(foldersTree, GetFolder('<b>Almoxarifado</b>', 'Welcome.html'), true);
//**************************************************************************************************
    AddModel(150, group                            , GetFolder('<b>Atendimento de Reserva</b>'                                   , PATH_LINKS+'MA35D8785-EBE7-484C-ACDA-8FCDF71168B1_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Atendimento Remessa Venda</b>'                                , PATH_LINKS+'ME1A49159-2B87-4F57-B74D-D49E23C02395_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Invent�rio</b>'                                               , PATH_LINKS+'M1F7E3071-5210-4C90-BE02-F670B53724AE_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Invent�rio Coletor</b>'                                       , PATH_LINKS+'M1BBA6221-3358-40D7-9288-46985D6A07E0_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Recebimento de Materiais Fornecedor</b>'                      , PATH_LINKS+'MA94C2B18-98B3-4F84-9385-1550EF4332F9_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Recebimento de Material Interfabrica</b>'                     , PATH_LINKS+'M10766931-F8FD-47A6-942A-E209280824AD_Z075.HTML'), false);//LEVEL-ONE-MODEL******************


//GROUP*********************************************************************************************
  group   = AddGroup(foldersTree, GetFolder('<b>Manuten��o</b>', 'Welcome.html'), true);
//**************************************************************************************************
  ME87F6C7FDDE1495CA1BB820908F74347 = 
    AddModel(150, group                            , GetFolder('<b>Manuten��o Corretivas e Emergencial Veiculos e Equip</b>'     , PATH_LINKS+'ME87F6C7F-DDE1-495C-A1BB-820908F74347_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Analizar e planejar Nota de Manuten��o e criar ordem de manuten��o', PATH_LINKS+'M4E5F294A-34AC-41FE-8088-207AA9DEE71B_Z075.HTML'), false);
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Criar nota PM'                                                   , PATH_LINKS+'MF48DE3AD-2A7A-48D5-B9CB-852FE10A263E_Z075.HTML'), false);
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Encerramento t�cnico'                                            , PATH_LINKS+'MFB598E30-25BF-49CC-8657-F2B439CCC8C2_Z075.HTML'), false);
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Executa a ordem impressa'                                        , PATH_LINKS+'M7A2509D4-C5DC-46E8-8BAB-FC858AAC9E48_Z075.HTML'), false);
    AddModel(150, ME87F6C7FDDE1495CA1BB820908F74347, GetFolder('Liberar Ordem de Manuten��o'                                     , PATH_LINKS+'M7C5BF97F-03A9-4262-B20D-6B8737D7F873_Z075.HTML'), false);
  M43DF2E91BF9B43E7AED1D2B3996CCEBB = 
    AddModel(150, group                            , GetFolder('<b>Manuten��o Preventiva Veiculos e Equip</b>'                   , PATH_LINKS+'M43DF2E91-BF9B-43E7-AED1-D2B3996CCEBB_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Analisar ordens pendentes de libera��o'                          , PATH_LINKS+'M0E79C463-3C81-42C8-BB69-987EF084E152_Z075.HTML'), false);
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Criar planos de manuten��o'                                      , PATH_LINKS+'M69A26810-0FF7-4355-B0D1-B705F0723833_Z075.HTML'), false);
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Encerramento t�cnico'                                            , PATH_LINKS+'ME1BB11C4-A9B1-46F0-AB36-D2ED98310235_Z075.HTML'), false);
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Executa a ordem impressa'                                        , PATH_LINKS+'MAACD65F2-49A7-446D-A058-EA93C25D04DB_Z075.HTML'), false);
    AddModel(150, M43DF2E91BF9B43E7AED1D2B3996CCEBB, GetFolder('Ordens criadas aut.'                                             , PATH_LINKS+'M9B7932A2-86FD-4E9E-AE85-136ACBE3307C_Z075.HTML'), false);
  M3893284DD15147A1881AD6EFA3F2E667 = 
    AddModel(150, group                            , GetFolder('<b>NF Remessa para conserto</b>'                                 , PATH_LINKS+'M3893284D-D151-47A1-881A-D6EFA3F2E667_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Atender Ordem de Frete'                                          , PATH_LINKS+'M661EFB5A-EC6B-4272-BADC-440CEE8F2045_Z075.HTML'), false);
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Criar ordem de frete'                                            , PATH_LINKS+'M2CB81856-4ABA-452F-8836-234D0FCDF4C3_Z075.HTML'), false);
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Implantar Pedido'                                                , PATH_LINKS+'M6154D286-B47B-4444-9441-9F99033CA70C_Z075.HTML'), false);
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Subcontrata��o ( Terceiro )'                                     , PATH_LINKS+'M3AC9D0B5-52BE-4D45-A9AA-757A1053C713_Z075.HTML'), false);
    AddModel(150, M3893284DD15147A1881AD6EFA3F2E667, GetFolder('Transporte Pr�prio'                                              , PATH_LINKS+'MBD9D6948-7F67-4D87-AC99-1013531A4338_Z075.HTML'), false);
  M5EEBE5A65565489BA42DD77B8A892B16 = 
    AddModel(150, group                            , GetFolder('<b>NF Transfer�ncia</b>'                                         , PATH_LINKS+'M5EEBE5A6-5565-489B-A42D-D77B8A892B16_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M5EEBE5A65565489BA42DD77B8A892B16, GetFolder('Atender Ordem de Frete'                                          , PATH_LINKS+'MDBB1BA33-AEAF-4386-9C35-4A416FD3935A_Z075.HTML'), false);
    AddModel(150, M5EEBE5A65565489BA42DD77B8A892B16, GetFolder('Criar ordem de frete'                                            , PATH_LINKS+'MD0F33420-DE46-4C22-A4B4-6AC359F37C86_Z075.HTML'), false);
  MB3960325951548209FE312B3D087D5EA = 
    AddModel(150, group                            , GetFolder('<b>NF Venda</b>'                                                 , PATH_LINKS+'MB3960325-9515-4820-9FE3-12B3D087D5EA_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, MB3960325951548209FE312B3D087D5EA, GetFolder('Cria e atende Ordem de Frete'                                    , PATH_LINKS+'MF096B45B-989D-4CDE-BA6C-D1D59D292E2A_Z075.HTML'), false);
    AddModel(150, MB3960325951548209FE312B3D087D5EA, GetFolder('Implantar Pedido'                                                , PATH_LINKS+'M81AF9770-C14F-4163-B6D8-944370D0005C_Z075.HTML'), false);

  MC1EE22C3CC9449809A7DC53A8B1B3CE6 = 
    AddModel(150, group                            , GetFolder('<b>Solicita��o da ordem</b>'                                     , PATH_LINKS+'MC1EE22C3-CC94-4980-9A7D-C53A8B1B3CE6_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, MC1EE22C3CC9449809A7DC53A8B1B3CE6, GetFolder('Analise e planejamento da ordem'                                 , PATH_LINKS+'M89CD2F9E-6A0C-48BC-BDFC-FE3AD9B2E60B_Z075.HTML'), false);
    AddModel(150, MC1EE22C3CC9449809A7DC53A8B1B3CE6, GetFolder('Cadastro objeto tecnico'                                         , PATH_LINKS+'M1E0C5D92-37E2-4EA0-989B-C243F0C93A42_Z075.HTML'), false);
    AddModel(150, MC1EE22C3CC9449809A7DC53A8B1B3CE6, GetFolder('Contrata��o do Servi�o externo / material'                       , PATH_LINKS+'M343E2250-B4D2-42DF-A811-ADED2BC9186F_Z075.HTML'), false);
    AddModel(150, MC1EE22C3CC9449809A7DC53A8B1B3CE6, GetFolder('Criar a nota PM'                                                 , PATH_LINKS+'M90AA1798-E4E5-41E1-B3F9-03F3FA6859B1_Z075.HTML'), false);
    AddModel(150, MC1EE22C3CC9449809A7DC53A8B1B3CE6, GetFolder('Encerramento Tecnico'                                            , PATH_LINKS+'M1DB0E459-0D26-48F4-AF0B-A8CB7063747B_Z075.HTML'), false);
    AddModel(150, MC1EE22C3CC9449809A7DC53A8B1B3CE6, GetFolder('Execu��o da ordem'                                               , PATH_LINKS+'M4BEC46FF-16A3-43F9-98F7-DD291C61C944_Z075.HTML'), false);
    AddModel(150, MC1EE22C3CC9449809A7DC53A8B1B3CE6, GetFolder('Libera��o da ordem'                                              , PATH_LINKS+'M4F01D4B6-22A5-4510-ACF7-871D56EAA38A_Z075.HTML'), false);
    AddModel(150, MC1EE22C3CC9449809A7DC53A8B1B3CE6, GetFolder('Reserva de material'                                             , PATH_LINKS+'M5E5B98A1-56B0-4372-8D97-241D0BFB7B9B_Z075.HTML'), false);



    AddModel(150, group                            , GetFolder('<b>Manuten��o emergencial</b>'                                   , PATH_LINKS+'M7DCA57C5-8742-46E8-BC51-234CC2126BFA_Z075.HTML'), false);//LEVEL-ONE-MODEL******************


    AddModel(150, group                            , GetFolder('<b>Preventiva Externa</b>'                                       , PATH_LINKS+'M7F8AF173-CFB8-4129-AC5F-6882D9E2098F_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
  M583C044C6F424AEC973A812BDC0E9D9F = 
    AddModel(150, group                            , GetFolder('<b>Preventiva Interna</b>'                                       , PATH_LINKS+'M583C044C-6F42-4AEC-973A-812BDC0E9D9F_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M583C044C6F424AEC973A812BDC0E9D9F, GetFolder('Analise das ordens pendentes de libera��o'                       , PATH_LINKS+'MC754BE9F-EEB3-42AB-8708-D3C47197A8C8_Z075.HTML'), false);
    AddModel(150, M583C044C6F424AEC973A812BDC0E9D9F, GetFolder('Apontamento das ordens executadas'                               , PATH_LINKS+'M13BA0207-5A32-4894-A2E5-5824D05B6A7D_Z075.HTML'), false);
    AddModel(150, M583C044C6F424AEC973A812BDC0E9D9F, GetFolder('Cria��o dos planos de manuten��o'                                , PATH_LINKS+'M532904D6-805A-446B-8BB6-11761D3F902D_Z075.HTML'), false);
    AddModel(150, M583C044C6F424AEC973A812BDC0E9D9F, GetFolder('Encerrar a ordem'                                                , PATH_LINKS+'M8867F902-141C-4400-A221-28B9F4E90F6C_Z075.HTML'), false);
    AddModel(150, M583C044C6F424AEC973A812BDC0E9D9F, GetFolder('Execu��o da ordem de manuten��o'                                 , PATH_LINKS+'ME05BC640-DB13-4D53-8AC8-AE94F3747FA6_Z075.HTML'), false);
    AddModel(150, M583C044C6F424AEC973A812BDC0E9D9F, GetFolder('Ordens criadas aut.'                                             , PATH_LINKS+'MC3929795-4417-4A6E-84C0-BBD0B70E53FB_Z075.HTML'), false);
    AddModel(150, M583C044C6F424AEC973A812BDC0E9D9F, GetFolder('Reserva de materiais'                                            , PATH_LINKS+'M5742F498-6AD8-438C-B2E4-6FA333C4B169_Z075.HTML'), false);


    AddModel(150, group                            , GetFolder('<b>Criar reserva</b>'                                            , PATH_LINKS+'M5441DEFC-29E8-47F5-A940-B3BC5A0208B4_Z075.HTML'), false);//LEVEL-ONE-MODEL******************


  MF4091267C2B6433488DC3AC95F75F323 = 
    AddModel(150, group                            , GetFolder('<b>Criar Nota de manuten��o</b>'                                 , PATH_LINKS+'MF4091267-C2B6-4334-88DC-3AC95F75F323_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, MF4091267C2B6433488DC3AC95F75F323, GetFolder('Nota de manuten��o corretiva'                                    , PATH_LINKS+'MADFD87DF-0F90-494E-850B-81FCB5BA895D_Z075.HTML'), false);
    AddModel(150, MF4091267C2B6433488DC3AC95F75F323, GetFolder('Nota de manuten��o Emergencial'                                  , PATH_LINKS+'MD214F223-38CE-4EFC-8342-94663F29866A_Z075.HTML'), false);    

    //GROUP*********************************************************************************************
  group   = AddGroup(foldersTree, GetFolder('<b>Transporte</b>', 'Welcome.html'), true);
//**************************************************************************************************
  M755A1D4B5DD848B08ED6401F8B0847E9 = 
    AddModel(150, group                            , GetFolder('<b>Carga de Inter-F�brica</b>'                                       , PATH_LINKS+'M755A1D4B-5DD8-48B0-8ED6-401F8B0847E9_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M755A1D4B5DD848B08ED6401F8B0847E9, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'MC043FC83-CA85-4EF1-8AC3-FD2E8BE6162B_Z075.HTML'), false);
    AddModel(150, M755A1D4B5DD848B08ED6401F8B0847E9, GetFolder('Criar ordem de Frete'                                            , PATH_LINKS+'M12AAAA40-ABFF-45F3-B98A-66F4FFD64075_Z075.HTML'), false);
  M80E5D1A7BEE141E3B1E22DFD2EA4C216 = 
    AddModel(150, group                            , GetFolder('<b>Cargas Viagens - Painel</b>'                                  , PATH_LINKS+'M80E5D1A7-BEE1-41E3-B1E2-2DFD2EA4C216_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'M108EDE52-1364-4E8A-8387-5D07A43581A4_Z075.HTML'), false);
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Atender ordem de frete ( subcontrata��o )'                       , PATH_LINKS+'MC7D03286-477D-497A-B303-8B8D0D0029AD_Z075.HTML'), false);
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Listar ordem de frete'                                           , PATH_LINKS+'M8C527D70-D639-4482-BE90-2C9EF93B10F1_Z075.HTML'), false);
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Listar unidade de frete'                                         , PATH_LINKS+'M4E26BA7C-B0B1-4555-ABBB-C6EB49014A23_Z075.HTML'), false);
    AddModel(150, M80E5D1A7BEE141E3B1E22DFD2EA4C216, GetFolder('Status de carregamento'                                          , PATH_LINKS+'MC714C110-2D6D-49CA-9A4A-AADEC334CAD5_Z075.HTML'), false);
  MEA06A46287764F2898C44C9572E2A7C6 = 
    AddModel(150, group                            , GetFolder('<b>Coletas Fornecedores</b>'                                     , PATH_LINKS+'MEA06A462-8776-4F28-98C4-4C9572E2A7C6_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'MD48D020E-CB5C-4906-BD79-A7079187497E_Z075.HTML'), false);
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Atender ordem de frete ( subcontrata��o )'                       , PATH_LINKS+'MAF0FE55B-1BD7-455A-BE6F-E5573CFC9B2E_Z075.HTML'), false);
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Lan�ar CTE'                                                      , PATH_LINKS+'M6DD68866-8100-47EA-A420-D00ABD50A9A2_Z075.HTML'), false);
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Listar ordem de frete'                                           , PATH_LINKS+'MDEC65EF9-E6D5-4AD5-8D20-56E4EF520AD9_Z075.HTML'), false);
    AddModel(150, MEA06A46287764F2898C44C9572E2A7C6, GetFolder('Pedido de compra'                                                , PATH_LINKS+'M03C6F880-E442-401E-AD46-CE037E3E63D0_Z075.HTML'), false);
  M418F35F2D5514D778FADB92CA8B83861 = 
    AddModel(150, group                            , GetFolder('<b>Coletas Importa��o</b>'                                       , PATH_LINKS+'M418F35F2-D551-4D77-8FAD-B92CA8B83861_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M418F35F2D5514D778FADB92CA8B83861, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'M1ACFD76D-0AB1-456A-986B-3BB629577F88_Z075.HTML'), false);
    AddModel(150, M418F35F2D5514D778FADB92CA8B83861, GetFolder('Listar ordem de frete'                                           , PATH_LINKS+'MC357D2D8-BC10-433C-B571-CE25B66FBC42_Z075.HTML'), false);
    AddModel(150, M418F35F2D5514D778FADB92CA8B83861, GetFolder('Pedido de compra'                                                , PATH_LINKS+'M76A30DB8-8E51-494D-8951-DAD89D4F9A30_Z075.HTML'), false);
  M5360B03CE19549B7A11383154ECE5341 = 
    AddModel(150, group                            , GetFolder('<b>Entrega Produto Novo</b>'                                     , PATH_LINKS+'M5360B03C-E195-49B7-A113-83154ECE5341_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Atender ordem de frete'                                          , PATH_LINKS+'MBE22374F-EBA8-46AD-A6A0-6B99954A252F_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Atender ordem de frete ( subcontrata��o )'                       , PATH_LINKS+'MF41BED3D-D0A4-4576-B61D-1B463A9F6F82_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Lan�ar CTE'                                                      , PATH_LINKS+'MFF3D8345-B194-4DFF-9E89-A97231FDFD7E_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Listar ordem de frete'                                           , PATH_LINKS+'MC9F68D13-8F7B-43B0-AE8B-9F14FB91DFE2_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Listar unidade de frete'                                         , PATH_LINKS+'M2B50BEE3-A528-4692-96E9-885D4D2C5400_Z075.HTML'), false);
    AddModel(150, M5360B03CE19549B7A11383154ECE5341, GetFolder('Pedido de venda'                                                 , PATH_LINKS+'M406D3898-67C4-4F2F-8672-875E86F9CC1C_Z075.HTML'), false);
  MA187231402474BC2A865A58593FBC2E4 = 
    AddModel(150, group                            , GetFolder('<b>Licen�as de Transporte</b>'                                   , PATH_LINKS+'MA1872314-0247-4BC2-A865-A58593FBC2E4_Z075.HTML'), true);//LEVEL-ONE-MODEL******************
    AddModel(150, MA187231402474BC2A865A58593FBC2E4, GetFolder('Licen�as Carga Excedente'                                         , PATH_LINKS+'M916ED476-804C-437A-AD4F-46F3A46278F4_Z075.HTML'), false);
    AddModel(150, MA187231402474BC2A865A58593FBC2E4, GetFolder('Licen�as Produto Novo'                                            , PATH_LINKS+'ME44526E9-A016-49F4-BB42-16953C607422_Z075.HTML'), false);
    AddModel(150, group                            , GetFolder('<b>Presta��o de contas Veiculos Sem NF</b>'                      , PATH_LINKS+'M3467E64E-323F-4256-98C9-308CA3AAA239_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Presta��o de contas Viagem</b>'                               , PATH_LINKS+'M884CCE6B-2D18-4A45-A09F-2A092B0EA770_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
    AddModel(150, group                            , GetFolder('<b>Solicitar Seguro e Escoltas</b>'                              , PATH_LINKS+'MADB5A395-362D-49D5-99D9-F1FE95245893_Z075.HTML'), false);//LEVEL-ONE-MODEL******************
}