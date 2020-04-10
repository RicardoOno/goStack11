# React Native
 - Verão react para Mobile
 - Multiplataforma
 - Podemos manipular cada plataforma de forma diferente (ios x android)
 - Não possui interface hibrida (webview) e sim interface nativa
 - Codigo não é transpilado
 - Varias plataformas como a Microsoft 

# Arquitetura
 - JS 
	-> metro bundler (packager) (aka webpack in reactjs) 
	-> bundle (todo codigo da app) 
	-> Bridg (ponto de comunicação entré js e codigo nativo) 
	-> depois disso ele transforma a interface para android (java) / ios (objective C)

# Sintaxe
 - Declaração igual da web
 - Não é html e sim componentes proprios
 - Apps sem classes ou ID's
 - Todo texto é <Text/> não existe estilização propria

# Expo
 - Pros: 
  - SDK com conjunto de funcionalidades prontas para usar 
  - Não é necessario configurar o emulador no PC

 - Cons:
  - Limiteção sobre o codigo do codigo nativo
  - Varias libs sem suporte para o Expo