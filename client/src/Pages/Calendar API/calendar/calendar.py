// Show events on user's calendar. https://developers.google.com/api-client-library/java/

View.header("Show Calendars");
CalendarList feed = client.calendarList().list().execute();
View.display(feed);

/** Authorizes the installed application to access user's protected data. */
private static Credential authorize() throws Exception {
    // load client secrets
    GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY,
        new InputStreamReader(CalendarSample.class.getResourceAsStream("/client_secrets.json")));
    // set up authorization code flow
    GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(
        httpTransport, JSON_FACTORY, clientSecrets,
        Collections.singleton(CalendarScopes.CALENDAR)).setDataStoreFactory(dataStoreFactory)
       .build();
    // authorize
    return new AuthorizationCodeInstalledApp(flow, new LocalServerReceiver()).authorize("user");
 }

 