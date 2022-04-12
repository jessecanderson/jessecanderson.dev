+++
title = "Chef on the Pi"
date = "2016-10-24T21:27:15-04:00"

#
# description is optional
#
# description = "An optional description for SEO. If not provided, an automatically created summary will be used."

tags = [ 'Chef', 'IoT', 'learning' ]
+++

A few weeks back I decided to replace my older Raspberry Pi for a new Raspberry Pi 3. I had no idea what I wanted to do with this amazing board when I bought it, but I did know that I wanted to see if I could get it to bootstrap to my Chef server. This was a very interesting process and I wanted to go through all the steps for anyone else who may want to bootstrap their Raspberry Pi for whatever reason.

Over the next few steps, I will be going through all that I had to do and what I learned in order to get the Chef Client installed and configured on my Raspberry Pi.

- <large> Update Ruby </large>

The first thing I had to do was update the version of Ruby that was installed on the Raspberry Pi. To do this, I ran the following commands:

  <pre><code data-trim class="bash">
  sudo su
  ruby --version
  cd /usr/src
  wget https://cache.ruby-lang.org/pub/ruby/2.2/ruby-2.2.5.tar.gz
  tar -xvzf ruby-2.2.5.tar.gz
  cd ruby-2.2.5
  sudo ./configure --enable-shared --disable-install-doc --disable-install-rdoc --disable-install-capi --with-openssl-dir=/usr/lib/ssl
  make -j4 ; make install
  </code></pre>

Ok, there is a lot happening here...so let us break that down.

  <pre><code data-trim class="bash">
  sudo su
  ruby --version
  </code></pre>

These commands will put us into root and then validate the version of Ruby that is currently installed.

  <pre><code data-trim class="bash">
  cd /usr/src
  wget https://cache.ruby-lang.org/pub/ruby/2.2/ruby-2.2.5.tar.gz
  tar -xvzf ruby-2.2.5.tar.gz
  cd ruby-2.2.5
  </code></pre>

This drops us into the /usr/src/ directory, downloads the latest (at the time of this writing) version of Ruby from the ruby-lang.org site. Please update the target here if you need to download different version of Ruby. After it is downloaded, we unpack the Ruby source and drop into that directory.

  <pre><code data-trim class="bash">
  sudo ./configure --enable-shared --disable-install-doc --disable-install-rdoc --disable-install-capi --with-openssl-dir=/usr/lib/ssl
  </code></pre>

Ok, here is where I had to do some extra searching. The site I found the walkthrough on (which can be found at [itToby](http://blog.ittoby.com/2016/04/installing-chef-on-raspberry-pi-23.html)) didn't talk about the SSL error that I was getting. During the configure command, it was not installing the correct openSSL packages into the Ruby package. I found the --with-openssl-dir=/usr/lib/ssl after hours of searching. Just validate that openSSl is installed as well as libssl-dev. These can be installed through the apt-get install options. Once the configure command completes then you can run the make command to make and install the new Ruby code.

  <pre><code data-trim class="bash">
  make install
  </code></pre>

There was an option that I saw on itToby post that had the command make -j4 that was suppose to multithread the make process. I didn't have any luck getting that to run and ended up just running the make install command solo. After it ran, I was able to run:

  <pre><code data-trim class="bash">
  ruby --version
  </code></pre>

This validated the correct version of Ruby was installed on my Raspberry Pi.

- <large> Install the Chef Client </large>

The next step was to install the Chef Client.

  <pre><code data-trim class="bash">
  gem install chef
  </code></pre>

After the gem is installed, you should be able to run the chef-client -v command and see the chef-client version:

![chef-client-image](/img/sockeyes51_2016-Oct-17.jpg "Chef-Client Version Check")

- <large> Bootstrap! </large>

From here, you should be able to go to your Chef Workstation and run the following:

  <pre><code data-trim class="bash">
  knife bootstrap (raspberry_pi_ip) --node-name 'Raspberry_Pi' --ssh-user 'username' --ssh-password 'password' --use-sudo-password --sudo
  </code></pre>

Ok, I'm still new with Chef and the bootstrap process, but I had to include the --user-sudo-password and the --sudo commands to get it to work. The output does throw an error, don't worry about that error right now. It seems to be related to a Chef ARM client issue not being in the repo.

After the bootstrap process has been completed, you should see the Raspberry Pi inside of your Chef Management server. Login and verify. From here, you can now apply the chef-client cookbook to the Raspberry Pi runlist without any issues.

The only gotcha that I have run across is the NTP and time on the Raspberry Pi. For some reason, mine is not updating correctly so I have to manually update the time every now and again to make sure there isn't any error when the chef-client runs. If the time is more then 15 min different, then Chef will error out.

So, did you have any success bootstrapping your own Raspberry Pi? Did you have to do anything different then what I did? Any hints, help on improving the process? Let me know in the comments and I hope you find this helpful!
