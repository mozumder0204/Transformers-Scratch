# Transformers-Scratch
① To install Angular on your local system, you need the following:

⦿  Node.js
➡ Download node.js application from ( https://nodejs.org/en/download ).
➡ To check node.js installed successfully in your system run this command in your terminal. ( node --version ).

⦿  npm package manager
➡ Angular applications depend on npm packages. which is installed with Node.js by default.
➡ To check npm installed successfully in your system run this command in your terminal. ( npm --version ).

⦿   Angular CLI
➡ You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.
➡ To install the Angular CLI, open a terminal window and run the following command: ( npm install -g @angular/cli ).

 ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪
② To create a new Angular project, you need the following:

⦿ Create a workspace
➡ Run the CLI command ng new and provide the project name, as shown here ( ng new transformers ).
➡ Would you like to add Angular routing? [Type 'Y' and press Enter key].
➡ Which stylesheet format would you like to use? [ Select 'SCSS' and press Enter key].
➡ The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes.

⦿  Run the application
➡ Navigate to the workspace folder, such as 'transformers'. Run the following command:
	➼ cd transformers
        ➼ ng serve --open
➡ WARNING: IF PowerShell does not run Angular commands, run PowerShell as administrator and run the following command:
	➼ Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
➡ Would you like to share anonymous usage data about this project with the Angular Team? [Type 'N' and press Enter key].


⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ⚪

③ Project Skeleton

⦿  Install necessary dependencies
➡ npm i bootstrap
➡ 

⦿  Add these 2 line under 'compilerOptions' in 'tslint.json' file.
		➡ "strictPropertyInitialization": false,
		➡ "strictNullChecks": false

⦿  Remove all default generated code from 'app.component.html' except '<router-outlet></router-outlet>'

⦿  Import these 2 module in 'app.module.ts'  HttpClientModule, BrowserAnimationsModule
	➡ import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
	➡ import { HttpClientModule } from '@angular/common/http';
	➡ imports: [
   				 BrowserModule,
    				AppRoutingModule,
    				HttpClientModule,
   			 	BrowserAnimationsModule,
  			    ],

⦿  Create a component for the top-nav bar
➡ To create a new component in angular, run the following command.
	➼ ng g c pages

⦿ Add Pages Component in 'app-routing.module.ts'.
	➼   {
    		path: '',
  	  	component: PagesComponent,
    		children: [],
  	        }

⦿ In 'pages.component.html' file of Pages Component add top-nav bar html template.

⦿ Add bootstrap npm css path into styles in 'angular.json' file [ "./node_modules/bootstrap/dist/css/bootstrap.css" ].

⦿ Add bootstrap npm js path into scripts in 'angular.json' file [ "./node_modules/bootstrap/dist/js/bootstrap.js" ].

⦿ Create a new component named dashboard.
	➼ ng g c dashbaord

⦿ Add Dashboard Component in 'app-routing.module.ts'.
	➼   {
    		path: '',
  	  	component: PagesComponent,
    		children: [ { path: '', component: DashboardComponent } ],
  	        }

⦿ Create a module under Pages Component. 
	➼ ng g m pages/tranformers --routing

⦿ Create a service under tranformers module. 
	➼ ng g s pages/tranformers/transformers [path/service_name].

⦿ Create a new component named tranformer-list under transformers module.
	➼ ng g c pages/tranformers/tranformer-list

⦿ Create a new component named tranformer-add under transformers module.
	➼ ng g c pages/tranformers/tranformer-add

⦿ Add Tranformers Module in 'app-routing.module.ts'.
	➼   {
    		path: '',
  	  	component: PagesComponent,
    		children: [ { path: '', component: DashboardComponent },
				{ path: 'tranformers', loadChildren: () => import('./pages/tranformers/tranformers.module').then(
            				(m) => m.TranformersModule ) } ]
  	        }

⦿ Add Tranformer List & Add Component in 'tranformers-routing.module.ts'.
	➼ const routes: Routes = [
  					{ path: '', component: TranformerListComponent, pathMatch: 'full' },
 					{ path: 'add', component: TranformerAddComponent, pathMatch: 'full' } ];











①
②
③
④
⑤
⑥
⑦
⑧
⑨
⦿
⚫

