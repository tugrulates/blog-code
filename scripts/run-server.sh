git update-index --assume-unchanged _docs
rm _docs -R
ln -s ~/notes/blog _docs
bundle exec jekyll serve --future --config _config.yml,_config_dev.yml --livereload --force_polling