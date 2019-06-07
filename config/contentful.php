<?php

/**
 * This file is part of the contentful/laravel package.
 *
 * @copyright 2015-2018 Contentful GmbH
 * @license   MIT
 */

return [
    /*
     * The ID of the space you want to access.
     */
    // 'space' => env('CONTENTFUL_SPACE_ID','f9qtzu9dvrki'),
    'space' => env('CONTENTFUL_SPACE_ID','ldgy0e55mhnf'),
    /*
     * The ID of the environment you want to access.
     */
    'environment' => env('CONTENTFUL_ENVIRONMENT_ID', 'master'),

    /*
     * An API key for the above specified space.
     */
    // 'token' => env('CONTENTFUL_DELIVERY_TOKEN','bef8878636daf1caabe2f86fea898a7b0c1383e4e20931164eac2fafd6e6d13a'),
    'token' => env('CONTENTFUL_DELIVERY_TOKEN','1c4e6709e2d0b240f07839298e91e479a511d6deaaf89fff8bce9f1b7b0b0b76'),
    /*
     * Controls whether Contentful's Delivery or Preview API is accessed.
     */
    'preview' => env('CONTENTFUL_USE_PREVIEW', false),

    /*
     * The default locale to use when querying the API.
     */
    'defaultLocale' => env('CONTENTFUL_DEFAULT_LOCALE', null),

    /*
     * An array of further client options. See Contentful\Delivery\Client::__construct() for more.
     */
    'options' => [
        'baseUri' => $baseUri = null,
        'guzzle' => $guzzle = null,
        'logger' => $logger = null,
        'cache' => $cache = null,
        'autoWarmup' => $autoWarmup = false,
    ],
];
