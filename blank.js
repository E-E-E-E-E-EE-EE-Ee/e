launchGame() function
Content Selection:
If CUSTOM_HTML.trim() has content → use it
Else → fetch from FALLBACK_URL
Caching (IndexedDB):

javascript   const newWindow = window.open('about:blank', '_blank');
   newWindow.document.write(htmlContent);
   newWindow.document.close();

javascript   newWindow.history.replaceState(null, '', 'random message'); 
