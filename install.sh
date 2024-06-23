arch -arm64 brew uninstall cocoapods &&
arch -arm64 brew install cocoapods &&
sudo arch -x86_64 gem install ffi &&
cd ios && arch -x86_64 pod install && cd ..

