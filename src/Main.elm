module Main exposing (main)

import Browser
import Html exposing (..)
import Html.Attributes exposing (class)


main : Program () Model Msg
main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


type alias Model =
    { property : Int
    , property2 : String
    }


init : () -> ( Model, Cmd Msg )
init _ =
    ( Model 0 "modelInitialValue", Cmd.none )


type Msg
    = Msg1
    | Msg2


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Msg1 ->
            ( model, Cmd.none )

        Msg2 ->
            ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Browser.Document Msg
view model =
    { title = "Document Title"
    , body =
        [ div
            [ class "w-screen h-screen flex justify-center items-center text-contrast-500 bg-slate-500" ]
            [ text "Another document" ]
        ]
    }
