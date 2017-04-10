using NReco.PhantomJS;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace GoogleExt
{
    /// <summary>
    /// Summary description for WebService1
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WebService1 : System.Web.Services.WebService
    {

        [WebMethod]
        public string Scrap(string pageUrl)
        {
            var phantomJS = new PhantomJS();
            phantomJS.OutputReceived += (sender, e) =>
            {
                Console.WriteLine("PhantomJS output: {0}", e.Data);
            };
            //phantomJS.RunScript("'use strict'; document.write('Hello, world!'); phantom.exit();", null);
            List<string> s = new List<string>();
            s.Add(pageUrl);

            phantomJS.Run(Server.MapPath("Phantom.js"), s.ToArray());


            //phantomJS.RunScript(" var page = require('webpage').create(); page.viewportsize = {  width: 2000,  height: 700}; page.open('http://www.scratcharge.com/', function(status) { console.log('status: ' + status);  if(status === 'success') {    page.render('img/test88.png');  }  phantom.exit();});", null);
            //phantomjs.run("/hello.js", null);
            //phantomJS.RunScript("var webpage = require('webpage');var page = webpage.create();page.open('http://www.hpsmehra.info', function (status) {  var content = page.content;  console.log('content: ' + content);  phantom.exit();});", null);
            //phantomJS.RunScript("var webpage = require('webpage');var page = webpage.create();page.open('http://www.hpsmehra.info', function (status) {  var content = page.content;  console.log('content: ' + content); var fs = require('fs');var path = 'content/output.txt'; var data = content; fs.write(path, data, 'w'); phantom.exit();});", null);            
            return null;
        }

        [WebMethod]
        public string CreateLogFile(string dataText)
        {
            try
            {

                //var phantomJS = new PhantomJS();
                //phantomJS.OutputReceived += (sender, e) =>
                //{
                //    Console.WriteLine("PhantomJS output: {0}", e.Data);
                //};
                ////phantomJS.RunScript("'use strict'; document.write('Hello, world!'); phantom.exit();", null);
                //List<string> data = new List<string>();
                //data.Add(dataText);

                //phantomJS.Run(Server.MapPath("Phantom.js"), data.ToArray());
                //return null;

                DirectoryInfo dr = new DirectoryInfo(System.Web.HttpContext.Current.Server.MapPath("~/"));
                if (!dr.CreateSubdirectory("LogFile").Exists)
                    dr.CreateSubdirectory("LogFile");

                string path = "~/LogFile/" + DateTime.Today.ToString("MM-dd-yyyy") + ".txt";
                if (!File.Exists(System.Web.HttpContext.Current.Server.MapPath(path)))
                {
                    File.Create(System.Web.HttpContext.Current.Server.MapPath(path)).Close();
                }

                //HttpContext.Current.Response.Write(System.Web.HttpContext.Current.Server.MapPath(path));
                using (StreamWriter w = File.AppendText(System.Web.HttpContext.Current.Server.MapPath(path)))
                {
                    w.WriteLine("\r\n");
                    w.WriteLine("{0}", dataText);
                    w.Flush();
                    w.Close();
                }
                return "data";
            }
            catch (Exception ex)
            {
                return ex.Message;
            }
        }
    }
}
