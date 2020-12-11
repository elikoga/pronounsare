package ga.eliko.pronounsa.re

import com.github.jknack.handlebars.Handlebars
import com.github.jknack.handlebars.Helper
import io.micronaut.http.HttpResponse
import io.micronaut.http.MediaType
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.views.ModelAndView
import io.micronaut.views.View


@Controller("/")
class PronounController(private val pronounRepository: PronounRepository, handlebars: Handlebars) {

    init {
        handlebars.registerHelper("capitalize", Helper<String> { context, options -> context.capitalize() })
    }

    @Get()
    fun index(): HttpResponse<*> {
        return HttpResponse.ok(ModelAndView("root", 0))
    }

    @Get("{+path}")
    fun pronouns(path: String): HttpResponse<*> {
        val pathSegments = path.split("/")

        if (pathSegments.size == 5) {
            val pronoun = pathSegments.let { Pronoun(it[0], it[1], it[2], it[3], it[4]) }
            return HttpResponse.ok(
                    ModelAndView("pronouns",
                            mapOf(Pair("path", path), Pair("pronouns", listOf(pronoun)))
                    )
            )
        }

        val pronounCounts = pronounRepository.pronouns.map { Pair(it, it.matchesCount(pathSegments)) }.sortedByDescending { it.second }

        val matchingPronouns = mutableListOf<Pronoun>()

        pronounCounts.map {
            if (it.second != 0 && matchingPronouns.all { pronoun -> it.first.matchesCount(pronoun.asList()) == 0 }) { // distinct pronoun
                matchingPronouns.add(it.first)
            }
        }

        return HttpResponse.ok(
                ModelAndView("pronouns",
                        mapOf(Pair("path", path), Pair("pronouns", matchingPronouns))))
    }
}
