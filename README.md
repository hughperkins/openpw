OpenPW
===================

This is a password hash generator.  You can generate strong unique passwords for multiple
website logins, using only a single master password (or more if you prefer).  You dont 
need to keep a password safe safe.

Choose from the following ways of using OpenPW:

- a Chrome extension
- a bookmarklet (use with Firefox for example, or Internet Explorer)
- a standalone webpage (for passwords outside of a webpage)
- a console application (for times when you dont want to use a webbrowser; also really simple, so 
you can see how it works)

The cool thing about this system is:
- you dont need a password safe, which you would need to store somewhere, backup and so on
- each site's password is unique
- I can't personally see any obvious way to guess the master password, even if someone knows
  a site's password, and the name of that site (but I cannot guarantee that, and you use 
  this script at your own risk).

To use, Chrome extension
------------------------

To install:

- download https://github.com/hughperkins/openpw/archive/master.zip
- unzip
- Go to chrome://extensions
- click 'developer mode'
- press 'load unpacked extension...'
- select the 'chrome' subfolder, and click 'ok'

To use:
- go to a website where you want to login
- click on the blue 'key'
- type in your master password and press 'submit', or press the 'enter' key
-> the password will be filled in for you automatically

What if I want to be sure I didn't mistype the master password?
- click 'confirm', and fill in a 'confirm' password
- if the passwords are different, you will see a message, and you can try again

I want to change my master password.  How can I put in the old and news passwords?
- click on the 'old password' field
- click the blue key
- click on 'selected field only', fill in your master password, and click 'submit'
- only the old password field will be filled in
- repeat for each of the 'new password' fields

To use, bookmarklet
-------------------

In Firefox or Internet Explorer, using a bookmarklet is the easiest way to enter passwords.

- In your internet browser, create a bookmark in your bookmarks toolbar, and paste the contents of 
inputpassword.js inside
- Go to a page where you want to enter a password
   - click the bookmark
   - enter your master password, and press 'enter'
   - that's it!

The password will be unique for each domain, and reasonably secure.  Ways to hack this system 
might include:
- shoulder-surfing your typing
- key-loggers
- javascript hacks in the target website

I'm fairly sure that it's non-trivial to work backwards from a password to retrieve the 
original master password, but I'm not an expert in this domain, and cannot guarantee that, and 
you use this script at your own risk.

Note that there are a couple of additional bookmarklets available here:
- showpass.js reveals all the password fields on the page, so you can check that the generated
  passwords look reasonable
- createpassword.js has two password fields, so you have to enter the password twice.  If they 
  are different, then it will show an error, and refuse to proceed.

To use, standalone page
-----------------------

Using the standalone page works where the password field is not embedded in a webpage.

- Go to https://hughperkins.github.io/openpw/standalone.html
- fill in the domain and password
- click 'Get Password'

- if you click 'Add confirm', then you can type your password twice, to check you typed it 
correctly

How to generate a secure master password?
-----------------------------------------

This cartoon is highly relevant: http://xkcd.com/936/

xkcd password generator here: http://preshing.com/20110811/xkcd-password-generator

Alternatively, you could pick a long sentence (10 words or more), and use the first letters
of each word.  The advantage to this is it might be harder to shoulder-surf.

Console version
---------------

masterpass.py is a console version, using python.  You can use this if you dont have access
to a web browser.  It copies the password into the clipboard, without ever showing it in clear.

The code is also easy to read and understand, so you can see how it works.

    > python masterpass.py
    Please enter domain: mydomain.com
    Please enter master password for mydomain.com: 
    Password has been copied to your clipboard

Acknowledgements
----------------

The idea is from Nic Wolff, http://angel.net/~nic/passwd.current.html .  I tweaked it a bit:
- made the passwords longer
- modified the bookmarklet to use a password field, so people can't shoulder-surf so easily
- added a version with a 'confirm' field
- added the 'showpass' bookmarklet
- created a console version

How does it work?
-----------------

Have a look at the python version.  It's very simple:
- it takes the sha1 hash of masterpassword + ':' + domain
- then it throws away everything after the 16th character
- that's it!

Is this compatible with passwordbookmarklet?
--------------------------------------------

No: it doesn't have the '1a' at the end of the generated passwords.  So you will need to change
your password on each website to switch from one system to the other.


