FROM php:8.0-fpm

RUN apt-get update && apt-get install -y \
        curl \
        wget \
        git \
		libzip-dev \
		libssh-dev \
		libpng-dev \
    && docker-php-ext-install -j$(nproc) pdo_mysql zip bcmath sockets opcache gd

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www

CMD ["php-fpm"]