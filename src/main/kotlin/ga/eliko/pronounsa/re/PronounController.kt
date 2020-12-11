package ga.eliko.pronounsa.re

import io.micronaut.http.MediaType
import io.micronaut.http.HttpResponse
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.core.annotation.Introspected
import io.micronaut.views.ModelAndView
import io.micronaut.views.View
import io.micronaut.views.ViewsRenderer


@Controller("/")
class PronounController(val viewsRenderer: ViewsRenderer) {

    @Get(produces = [MediaType.TEXT_PLAIN])
    fun index(): String {
        return "Hello World: /" 
    }
    @Get("{+path}")
    fun pronouns(path: String): HttpResponse<*> {
        return HttpResponse.ok(ModelAndView("pronouns" , Pronouns(path)))
    }
}

@Introspected
data class Pronouns(val asdVAl: String)
