package ga.eliko.pronounsa.re

import com.univocity.parsers.tsv.TsvParser
import com.univocity.parsers.tsv.TsvParserSettings
import io.micronaut.core.io.ResourceLoader
import javax.inject.Singleton

@Singleton
class PronounRepository(resourceLoader: ResourceLoader) {

    private val pronounStream = resourceLoader.getResourceAsStream("pronouns.tsv")
    private val tsvParserSettings = TsvParserSettings()

    init {
        tsvParserSettings.format.setLineSeparator("\r\n")
    }

    private val tsvParser = TsvParser(tsvParserSettings)
    private val pronounArrayList = pronounStream.map { tsvParser.parseAll(it) }.map { it.toList() }.orElse(emptyList())
    val pronouns = pronounArrayList.map { Pronoun(it[0], it[1], it[2], it[3], it[4]) }


}
